.PHONY: start build container

# Set the GOPATH to current working dir
GOPATH := ${PWD}/:${GOPATH}
export GOPATH

ARCH=amd64
BASEIMAGE=alpine
BUILD_IMAGE ?= golang:1.10.3-alpine

start:
	docker run -it -p 10000:10000 rnbackend

container: build
	@docker build -t rnbackend -f Dockerfile .

build:
	@docker run \
	    --rm \
		-e "GOCACHE=/tmp/gocache" \
	    -u $$(id -u):$$(id -g) \
	    -v "$$(pwd)/bin/$(ARCH):/go/bin" \
	    -v "$$(pwd)/bin/$(ARCH):/go/bin/$(GOOS)_$(ARCH)" \
		-v "$$(pwd)/src/do:/go/src/do" \
	    -w /go/ \
	    golang:1.10.3-alpine go install ./src/do/cmd/server/...