flatc --java -o protocol/java/src -I ./protocol/flatbuffers/ ./protocol/flatbuffers/all.fbs && \
flatc --cpp --scoped-enums -o protocol/cpp/include/slimevr_protocol/generated -I ./protocol/flatbuffers/ ./protocol/flatbuffers/all.fbs && \
flatc --ts --gen-object-api -o protocol/typescript/src -I ./protocol/flatbuffers/ ./protocol/flatbuffers/all.fbs && \
flatc --rust --rust-module-root-file --gen-all -o protocol/rust/src/generated ./protocol/flatbuffers/all.fbs
