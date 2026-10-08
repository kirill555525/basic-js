/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const encrypted = this.transform(message, key, 1);

    return this.direct
      ? encrypted
      : encrypted.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const decrypted = this.transform(encryptedMessage, key, -1);

    return this.direct
      ? decrypted
      : decrypted.split('').reverse().join('');
  }

  transform(message, key, direction) {
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();

    let keyIndex = 0;

    return upperMessage
      .split('')
      .map((char) => {
        if (char < 'A' || char > 'Z') {
          return char;
        }

        const messageCode = char.charCodeAt(0) - 65;
        const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;

        keyIndex += 1;

        return String.fromCharCode(
          ((messageCode + direction * keyCode + 26) % 26) + 65,
        );
      })
      .join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
