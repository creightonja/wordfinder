describe('wordSplitter', function () {
  it("hello input, output 1", function() {
    expect(wordSplitter("hello")).to.equal("hello: 1");
  });

  it("Hi hi => hi: 2", function() {
    expect(wordSplitter("Hi hi")).to.equal("hi: 2");
  });

  it("Hello hello hi hi => hello: 2, hi: 2", function() {
    expect(wordSplitter("Hello hello hi hi")).to.equal("hello: 2, hi: 2");
  });



});
