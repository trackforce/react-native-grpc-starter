import { inject, observer } from 'mobx-react';
import { Button, Container, Content, Text, View, Header, Title, Body, Toast } from 'native-base';
import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { GrpcService, GrpcCore } from '../services';
import { StyleSheet } from 'react-native';
import { API_URL } from '../env';

interface DebugScreenProps {
    navigation: NavigationScreenProp<{}, {}>;
    grpcService: GrpcService;
    grpcCore: GrpcCore;
}

function log(...args) {
    // tslint:disable-next-line:no-console
    console.log(...args);
}

function success(text: string) {
    Toast.show({type: 'success', text});
}

function error(text: string) {
    Toast.show({type: 'danger', text});
}

@inject(GrpcCore.injectKey, GrpcService.injectKey)
@observer
export class DebugScreen extends Component<DebugScreenProps> {
    static readonly navigationOptions = { title: 'Debug' };

    async componentDidMount() {
        try {
            await this.props.grpcCore.initialize(API_URL, false, '');
        } catch (err) {
            error(err);
        }
    }

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    pingGRPC = async () => {
        const { grpcService } = this.props;
        try {
            const rsp = await grpcService.ping({ message: `Ping ${Date.now()}` });
            success(rsp.message);
        } catch (err) {
            error(err);
        }
    }

    serverStream = () => {
        const { grpcService } = this.props;
        const stream = grpcService.serverStream({ message: `Ping ${Date.now()}` });
        stream.on('recv', (data) => {
            log('data', data);
            success(data.message);
        });
        stream.on('error', (err) => {
            log('error', err);
        });
        stream.on('end', () => {
            log('end');
        });

        setTimeout(() => {
            log('close server stream');
            stream.emit('close');
        }, 3000);
    }

    clientStream = () => {
        const { grpcService } = this.props;
        const stream = grpcService.clientStream();
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                log('send client stream');
                stream.emit('send', { message: `Ping ${Date.now()}` });
            }, 1000 * i);
        }
        stream.on('error', (err) => {
            log('error', err);
        });
        stream.on('end', () => {
            log('end');
        });

        setTimeout(() => {
            log('close client stream');
            stream.emit('close');
        }, 3000);
    }

    bidiStream = () => {
        const { grpcService } = this.props;
        const stream = grpcService.bidiStream();
        stream.on('recv', (data) => {
            log('recv data', data);
            success(data.message);
            // let's acknowledge message
            stream.emit('send', { message: 'OK' });
        });

        stream.on('error', (err) => {
            log('error', err);
        });
        stream.on('end', () => {
            log('end');
        });

        setTimeout(() => {
            log('close bidi stream');
            stream.emit('close');
        }, 5000);
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Native gRPC</Title>
                    </Body>
                </Header>
                <Content padder>
                    <View flex={1} flexWrap='wrap' flexDirection='row'>
                        <Button small style={styles.actionBtn} onPress={this.pingGRPC}>
                            <Text>Ping GRPC</Text>
                        </Button>
                        <Button small style={styles.actionBtn} onPress={this.serverStream}>
                            <Text>Server Stream</Text>
                        </Button>
                        <Button small style={styles.actionBtn} onPress={this.clientStream}>
                            <Text>Client Stream</Text>
                        </Button>
                        <Button small style={styles.actionBtn} onPress={this.bidiStream}>
                            <Text>Bidi Stream</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    actionBtn: {
        marginBottom: 5,
        marginRight: 5
    }
});
