import { inject, observer } from 'mobx-react';
import { Button, Container, Content, Text, View, Toast } from 'native-base';
import React, { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { GrpcService, GrpcCore } from '../services';
import { StyleSheet } from 'react-native';

interface DebugScreenProps {
    navigation: NavigationScreenProp<{}, {}>;
    grpcService: GrpcService;
    grpcCore: GrpcCore;
}

@inject(GrpcService.injectKey)
@observer
export class DebugScreen extends Component<DebugScreenProps> {
    static readonly navigationOptions = { title: 'Debug' };

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    pingGRPC = async () => {
        const { grpcService } = this.props;
        try {
            const rsp = await grpcService.ping({ message: `Ping ${Date.now()}` });
            this.success(rsp.message);
        } catch (err) {
            this.error(err);
        }
    }

    serverStream = () => {
        const { grpcService } = this.props;
        const stream = grpcService.serverStream({ message: `Ping ${Date.now()}` });
        stream.on('recv', (data) => {
            this.log('data', data);
            this.success(data.message);
        });
        stream.on('error', (err) => {
            this.log('error', err);
        });
        stream.on('end', () => {
            this.log('end');
        });

        setTimeout(() => {
            this.log('close server stream');
            stream.emit('close');
        }, 3000);
    }

    clientStream = () => {
        const { grpcService } = this.props;
        const stream = grpcService.clientStream();
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                this.log('send client stream');
                stream.emit('send', { message: `Ping ${Date.now()}` });
            }, 1000 * i);
        }
        stream.on('error', (err) => {
            this.log('error', err);
        });
        stream.on('end', () => {
            this.log('end');
        });

        setTimeout(() => {
            this.log('close client stream');
            stream.emit('close');
        }, 3000);
    }

    bidiStream = () => {
        const { grpcService } = this.props;
        const stream = grpcService.bidiStream();
        stream.on('recv', (data) => {
            this.log('recv data', data);
            this.success(data.message);
            // let's acknowledge message
            stream.emit('send', { message: 'OK' });
        });

        stream.on('error', (err) => {
            this.log('error', err);
        });
        stream.on('end', () => {
            this.log('end');
        });

        setTimeout(() => {
            this.log('close bidi stream');
            stream.emit('close');
        }, 5000);
    }

    render() {
        return (
            <Container>
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

    log(...args) {
        console.log(...args);
    }
    
    success(text: string) {
        Toast.show({text, type: 'success'});
    }
    
    error(err: Error) {
        Toast.show({text: err.message, type: 'danger'});
    }
}

const styles = StyleSheet.create({
    actionBtn: {
        marginBottom: 5,
        marginRight: 5
    }
});
