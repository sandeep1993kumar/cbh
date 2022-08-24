const crypto = require("crypto");
const { TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH } = require("./application.constants");

exports.deterministicPartitionKey = (event) => {
  if(!event) return TRIVIAL_PARTITION_KEY;
  if(event.partitionKey) {
    let key = event.partitionKey;
    key = typeof key === 'string' ? key : JSON.stringify(key);
    key = key.length <= MAX_PARTITION_KEY_LENGTH ? key : getHash(key);
    return key;
  }
  return getHash(JSON.stringify(event));
};

const getHash = data => crypto.createHash("sha3-512").update(data).digest("hex");
