# get Makefile directory name: http://stackoverflow.com/a/5982798/376773
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

BIN := $(THIS_DIR)/node_modules/.bin

NODE ?= node
ZUUL ?= $(NODE) $(BIN)/zuul

test:
	$(ZUUL) \
		--ui mocha-bdd \
		--local 8080 \
		--open \
		--no-coverage \
		-- \
		test/*.js

.PHONY: test