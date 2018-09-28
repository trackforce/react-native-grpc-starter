#!/bin/bash

proto_files=$(ls ./proto)
tools_version=1.0.10

compile()
{
    docker run \
    --rm \
    -v $(pwd)/proto:/proto \
    -v $(pwd)/.out:/.out \
    -w / \
    anjmao/grpc-tools:${tools_version} --proto_path /proto $@
}

compile_go_proto()
{
    echo "Compiling go proto..."
    for filename in ${proto_files}; do
        compile \
        --go_out=plugins=grpc:/.out \
        ${filename}
    done
}

copy_go_proto()
{
    echo "Copying go proto ./src/do/ob ..."
    for filename in ${proto_files}; do
        pkg_name=${filename%.*}
        pkg_dir=./src/do/pb/${pkg_name}
        mkdir -p ${pkg_dir}
        cp ./.out/${pkg_name}.pb.go ${pkg_dir}
    done
}

prepare_out_dir()
{
    rm -rf ./.out
    mkdir -p ./.out
}

ARG=$1

main()
{
    prepare_out_dir
    compile_go_proto
    copy_go_proto
}

main