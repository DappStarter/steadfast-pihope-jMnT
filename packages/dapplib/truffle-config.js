require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn puppy harvest drop swing skate'; 
let testAccounts = [
"0xd4ab7c4b4b429c859e1d7cfce6949e9a9ab87bdfb63eb061f61866eaf395c1da",
"0x9eb69a7d421de4637a1db1388427c561653fedd7719523444eca345820d25e40",
"0x44edaced886d70b0269d914854773b32606d1ba6e9303c148ed010dd9f5d40c6",
"0x8638252cf44d5f136518eee57edceefff5a06613aaed39bb2162bf97bcd4a770",
"0xb46f423c15cfd0a0f15fd90079d84fffa4a75ae5bf1f53e54275a9770d0692a0",
"0x1daf8d580aec9e00fc3064bb7323d73e78f9a545c7d7ea55c2f68a3da85f7353",
"0x46c7df31b1c5fe71d4f665f695e4c23c7b06dbe37750359091c90bbdfd54d3a2",
"0xa36028cb06c709f54e94749edbf6f8846ed976b8c5004a7275909b23a2b146f0",
"0xcea7354ed0cd8075451ee8308b2b32719e1f96cc91e42144d94281b10ee47778",
"0xfbc723a2121ebb5c981eccab8979571017d6e3b764ce445bae70d4955b1e973b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

