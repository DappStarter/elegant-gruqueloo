require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth oven exchange imitate private force tennis'; 
let testAccounts = [
"0xfa2a3f93bd003726b84330bc92bb92acaed135a13c133a3be50f8aa71ec89230",
"0xe1d50828b3daf02b2e85b4834571b9d7695a6b2d42f57bcded0d13ec687f4b81",
"0x317456b5096c41fc0fa38543b74c7a67b2d96e2192cb1e3f168e38f4a50d9842",
"0xcc49afa70d543dfdea5389ce03b6db0069b90b7861d65ec51cd48a2948dbee06",
"0x83c06703e64639a5b4a6ae10cac988399b1eff6219279176b31b8ac1e4283edb",
"0x35dc16c6a9e577f33e56e17ae749d624ff74d0a1fab6d85e5adba33841df5584",
"0xf6b3f884f1454df023841230c4b9b49270473d4308ef41a067353292fbb37e49",
"0xbab56d0b08c2ffdbb8f7aa7fd52625dd61ddcedecab6a3d5089028dee2aa07aa",
"0x1c820c4763af5ee1cc1cceb2f2b62699ede58ad5316658001f0ac03c9da2937b",
"0x13c401e6cab78effff4ff286a4b133643388797fea39246d47a9f3e2e0f42eaa"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
