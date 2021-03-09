.SUFFIXES: .pu .svg

.pu.svg:
	plantweb --server $(PLANTUMLWEB) --format svg $<

SRCS := $(wildcard *.pu)
OBJS := $(patsubst %.pu,%.svg,$(SRCS))

all: $(OBJS)
