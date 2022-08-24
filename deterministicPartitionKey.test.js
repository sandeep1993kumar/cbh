const { MAX_PARTITION_KEY_LENGTH, TRIVIAL_PARTITION_KEY } = require("./application.constants");
const { deterministicPartitionKey } = require("./deterministicPartitionKey");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it(`Returns partition key if provided in input and its length is less than ${MAX_PARTITION_KEY_LENGTH}`, () => {
    const event = {partitionKey:"AA"}
    const key = deterministicPartitionKey(event);
    expect(event.partitionKey).toBe(key);
  });

  it(`Returns hash of length 128 if partition key length is greater than ${MAX_PARTITION_KEY_LENGTH}`, () => {
    const event = {partitionKey:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}
    const key = deterministicPartitionKey(event);
    expect(key.length).toBe(128);
  });

  it(`Returns hash of length 128 if only an event object is provided without partitionKeyField`, () => {
    const event = {someField: ''}
    const key = deterministicPartitionKey(event);
    expect(key.length).toBe(128);
  });
  it(`Returns hash of length 128 if partition key is empty string`, () => {
    const event = {partitionKey: ''}
    const key = deterministicPartitionKey(event);
    expect(key.length).toBe(128);
  });

  it(`Returns hash of length 128 if partition key is null`, () => {
    const event = {partitionKey: null}
    const key = deterministicPartitionKey(event);
    expect(key.length).toBe(128);
  });
});
