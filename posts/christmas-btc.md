---
title: 'Bitcoin for Christmas!'
date: '2023-12-25'
author: 'Zane Kharitonov'
time: '20min'
---
<style>
  .link {
    color: blue;
    text-decoration: underline;
  }

  .screenshotImage {
    max-width: 100%;
  }

  .caption {
    margin: 0 auto;
    text-align: center;
  }
</style>
<br >
Hello Friends!

<br >
I'm glad you made it here. If you received this link from a gift of mine that means I care about you (and your financial future)! This article will take you through the process of creating a bitcoin wallet and sending your first bitcoin transaction. It will also explain the importance of a decentralized currency system that allows for individual end users (yourself) to have ownership over their own funds, something quite difficult with centralized or fiat currency schemes, like the US Dollar.

<br >

### Importance of Bitcoin

<br>
I first want to explain to you the importance of bitcoin and how it differs from fiat currency such as the US Dollar, but if you wish to skip ahead to <span class="link">[Creating a Bitcoin Wallet](#creatingabitcoinwallet)</span>, <span class="link">[Restoring a Bitcoin Wallet](#restoringabitcoinwallet)</span>, or <span class="link">[Creating a Transaction](#creatingatransaction)</span> you can click on their respective links. The past 2-3 years the US has experienced a large increase in inflation from its target of 2%. OKOKOKThis is due to many factors such as COVID-19 and the surplus of US currency that was distributed as part of the stimulus checks that were distributed. OKOKOK While helpful at the time, we now all see the lasting impact of this mass increase of US currency, our dollar buys far less than it did just a few years ago, everything feels more expensive while we are earning just about the same. This is one of the drawbacks of fiat currency, a central authority, in this case the US government can decide to print as much currency as they'd like to satisy short terms goals, while all the time devaluing the US dollar. In a decentralized currency scheme such as bitcoin, this unexpected increase in the money supply is impossible as no one single entity can decide to "print" more bitcoin. There will only ever be 21,000,000 bitcoin in existence and this cannot change without agreeance of the marjoity (51%) of the system. Much like gold, this makes bitcoin a "scarce" resource in that there is and always be a finite amount of it. This will keep any single entity from devaluing the currency that YOU own.

<br >

### Fundamental topics of bitcoin

<br>
Now that you understand some of the reasons why bitcoin was created and the importance of it I want to explain some fundamental topics of bitcoin that will demonstrate how it works and why it is truly secure. 

<br >

#### Blockchain

<br>
The first concept you should understand is the blockchain. The blockchain is a public ledger of all transactions that have ever existed on the bitcoin network. The bitcoin that I have provided in your gift was sent to you through a transaction I created that is stored on the blockchain. <a href="https://mempool.space/tx/6cb751ff1c826ff8fedfa32e458bdbd6187d27f60b93bd47c9e3ad4cd6d39a81" class="link" target="_blank">Here</a> is an example of a bitcoin transaction that you can view on a a blockchain explorer. This particular transaction moved ~$50,000 worth of bitcoin with a transaction fee of just ~$2. The transaction that I created can be found <a href="https://mempool.space/tx/50c347b330ce8dcc3c1fc1d8b31aef06e1ed089c6be7d5c1c1640b1bcea0689d" class="link" target="_blank">here</a>. This transaction split 0.00697804 BTC to 30 separate Bitcoin wallets. Because this is a more "complicated" transaction than the one I previously linked, you may notice this transaction has a much higher fee.

<br >

#### Bitcoin Wallet

<br>
The next concept you should understand is a bitcoin wallet. A bitcoin wallet is a collection of public and private keys. From a public key a bitcoin address can be generated. You can think of a bitcoin address like your home address while the private key is the key to your front door or mailbox. Someone can send you a gift to you using your home address, but to access said gift you must have a key to the front door or mailbox. Someone can send you bitcoin with your public key, but cannot access the bitcoin unless they have your private key. A private key is what controls the bitcoin that it owns. The following is what a private key looks like:
<br >
<br >
`Kwkw4Hnw6Z5925QoUD91SbVqvnAdU12t9WxY8JN1dF8NM1e4jx2V`
<br >
<br >
Private keys are hard to remember so there is a human readable form a private key called a mneumonic. For bitcoin the mneumonic is a 12 word phrase that represents your private key. The mneumonic for the private key I showed earlier looks like this:
<br >
<br >
`ability happy auction rhythm bench board zoo apple merry humor sick excite`
<br >
<br >
The corrseponding bitcoin address for this private key looks like this: 
<br >
<br >
`bc1qkgk9azrcfgnsp7dnycpj22p28sm84huvvc4axe
`
<br >
<br >
Bitcoin uses complex mathematics using the private and public keys to provide security to the network, you can read more about that
<a href="https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch04.html" class="link" target="_blank">here</a> (warning this is very technical). Now you've learned a few concepts about bitcoin lets get into creating a bitcoin wallet.

<br >

### Creating a Bitcoin Wallet

<br>
The wallet that I have deceided to use for this tutorial is <a href="https://www.coinbase.com/wallet" class="link" target="_blank">Coinbase Wallet</a>, a mobile wallet that can be downloaded on <a href="https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455" class="link" target="_blank">iOS</a> or <a href="https://play.google.com/store/apps/details?id=org.toshi&pcampaignid=web_share" class="link" target="_blank">Android</a>, although any bitcoin wallet software can be used to accomplish the same goals. A non-comprehensive list for all platforms can be found <a href="https://bitcoin.org/en/choose-your-wallet" class="link" target="_blank">here</a>. **Note:** Coinbase wallet can be used for various cryptocurrencies, but this tutorial will only speak about bitcoin. To create a new wallet click "Create new wallet" and enter a secure passcode. This passcode encrypts your wallet on your current device, meaning this passcode is device specific (if you forget this passcode you can always restore your wallet with your mneumonic phrase, which I'll speak about shortly). You should know your mneumonic phrase is extremely imoprtant and is the only thing that can restore your bitcoin if you lose access to your wallet or device. 
<br >
<br >
<h3>Not me, the US government, or the worlds most skilled hacker can recover your bitcoin if you lose your  mnuemonic phrase.</h3>
<br >
It will take an attacker hundreds of millions to billions of years to recover your specific bitcoin wallet in the case you lose your mneumonic phrase. You can read more about that <a href="https://news.bitcoin.com/how-hard-is-it-to-brute-force-a-bitcoin-private-key/" class="link" target="_blank">here</a>, or watch <a href="https://www.youtube.com/watch?v=S9JGmA5_unY" class="link" target="_blank">this</a> 5 minute youtube video which is found in the last post I linked (very fun watch to help you understand how secure the public/private key scheme used in bitcoin is).
<br >
<br >
Next it will ask if you want to claim your username, this is an optional step, I will skip it for this tutorial. To view your bitcoin address on which you can receive bitcoin click the "receive" button then click "Bitcoin address".
<br >
<br >
<img src="../images/christmas-btc/pic1.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic2.jpg" class="screenshotImage"/>
<br >
<br >
If you click on the QR code icon you will be able to view a QR code that can be used to send bitcoin to your wallet. 
<br >
<br >
<img src="../images/christmas-btc/pic3.jpg" class="screenshotImage"/>
<br >
<br >
The most important step now is to backup your mneumonic phrase. This phrase should be stored very securely as anyone who has this phrase can control (spend) the bitcoin in this wallet. This should not be shared with **ANYONE**. As I mentioned earlier losing this phrase also can result in the loss of the funds in your bitcoin wallet. You can find your 12 word mnumonic phrase by clicking on "Address 1" in the top left hand corner, then "Add & manage wallets", and finally "Show recovery phrase". It will prompt you to enter the passcode you entered earlier, click allow after you have entered your passcode and click on the eye icon to display your mneumonic.
<br >
<br >
<img src="../images/christmas-btc/pic4.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic5.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic6.jpg" class="screenshotImage"/>
<br >
<br >
In the gift that you have received I have priovided a place for you to store such mnuemonic phrase. The order of the words in the mnumonic phrase is crucially important. You can remove the tab now that says "Dont Remove Until You've Visted zane.fun" and write your mnuemonic phrase on the paper that is inside your device. Do **NOT** lose this paper until you restore this Bitcoin wallet, which I'll go through in the next section, as this is the mnumonic phrase that controls the Bitcoin that I sent you. You should write the words in the order listed in the picture below. 
<br >
<br >
<img src="../images/christmas-btc/pic7.jpg" class="screenshotImage"/>
<br >
<br >
A caveat I must mention with the device that I sent you is that this isn't necessarilly a "secure" way to store your mneumonic phrase. This is a fun gift that is meant to peak your interest in bitcoin from your friend. The device has some good aspects of security, that it is stored physically and offline, but lacks other crucial aspects of secure storage. If you lose this device, or it gets destroyed, think fire, flood, etc... you will lose access to your Bitcoin. You should really store this phrase securely in at least 2 secure separate places such as a safe for example. Mnuemonic phrase storage is a highly debated topic and you can read more about it <a href="https://cryptoadventure.com/best-ways-to-store-your-mnemonic-passphrase-and-how/" class="link" target="_blank">here</a>. 
<br >
<br >
**I AM NOT RESPONSIBLE FOR YOU LOSING YOUR MNUEMONIC PHRASE OR ANY ASSETS TIED THE MNUMONIC PHRASE YOU CREATED OR I PROVIDED YOU OR THE MNEUMONIC PHRASE YOU HAVE STORED ON THE DEVICE I HAVE PROVIDED YOU.**
<br >
<br > 

### Restoring a Bitcoin Wallet

<br>
Next I will show you how to restore a bitcoin wallet so that you can send the bitcoin that I gifted you. You will need the original mnumonic phrase I gave you for this located on the paper your removed from the device. To restore a wallet click "Address 1" in the top left corner then "Add & manage wallets" then "Import a wallet". Next click "Enter recovery phrase". Enter the 12 word phrase in the specific order I picture above. You should now see your bitcoin in your wallet! If loading your wallet seems to be taking a long time, try closing out of the Coinbase Wallet app and restarting, or deleting and re-downloading the app if it still persists. (Make sure you've backed up your mneumonic phrase if you wish to still access the wallet you initially created).
<br >
<br >
<img src="../images/christmas-btc/pic8.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic9.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic10.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic11.jpg" class="screenshotImage"/>
<br >
<br >

### Creating a Transaction

<br>
Last I will explain the process of sending a transaction. For this tutorial I will demonstrate sending the bitcoin in the original wallet I created for you, and sending it to the new wallet you just created. The importance of this is not to be misunderstood. Earlier I explained the importance of safeguarding your mnuemonic phrase, or private key, which is in control of your bitcoin. A consideration you may have made, is that since I created your wallet and distributed your mneumonic phrase to you, I currently have full control of your bitcoin. (Perhaps because I stored your phrase temporarily to safeguard your bitcoin in the result that youve lost your phrase). As much as you trust me as a friend, you should not trust me to be a custodian of your bitcoin or any of your assets. Upon sending the bitcoin from the initial wallet I distributed to you to the new wallet you created you will have effectively removed my control of your bitcoin, as your second wallet will contain a new private key that control your bitcoin that I have no access to.
<br >
<br >
To send bitcoin to your new wallet you must obtain your bitcoin address, the address that is used to send your wallet bitcoin. To do this make sure you have selected the wallet you initally created with a zero Bitcoin balance by switching back to the wallet you created by clicking "Address 1" in the top left corner, and selecting "Address 1" from Wallet 1 (This should be the wallet with no funds in it). Click "Receive", and then "Bitcoin address". Your address should be copied to your clipboard, but you can paste it in your notes app to confirm.
<br >
<br >
<img src="../images/christmas-btc/pic12.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic13.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic14.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic15.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic16.jpg" class="screenshotImage"/>
<br >
<br >
Remember this is your public key, the address people use to send you payments. This is not secret information, so there is no need to store this securely, unless you prefer to separate your real identity from your bitcoin address. This is in practice a difficult thing to do, and more aspects related to bitcoin and privacy can be found <a href="https://river.com/learn/bitcoin-privacy-and-anonymity/" class="link" target="_blank">here</a>.
<br >
<br >
Now with your bitcoin address copied to your clipboard navigate back to the wallet that contains the bitcoin by clicking Address 1 in the top left corner, click on "Address 1" under "Wallet 2", this should be the wallet that has a bitcoin balance.
<br >
<br >
<img src="../images/christmas-btc/pic17.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic18.jpg" class="screenshotImage"/>
<br >
<br >
Then click "Send", then "Max", so you send all of the Bitcoin in your wallet, then "Next".
<br >
<br >
<img src="../images/christmas-btc/pic19.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic20.jpg" class="screenshotImage"/>
<br >
<br >
<img src="../images/christmas-btc/pic21.jpg" class="screenshotImage"/>
<br >
<br >
Paste the Bitcoin address that you copied earlier, the Bitcoin address of the wallet you initially created, and click the address.
<br >
<br >
<img src="../images/christmas-btc/pic22.jpg" class="screenshotImage"/>
<br >
<br >
Some very important topics here that you should understand is that YOU and only YOU are in control of your bitcoin at this time. No centralized exchange, for example Coinbase, or centralized entity, for example the US government or your bank, can control YOUR asset at this point. That is a very powerful concept and I implore you to think about what effects that could have on the greater public.
<br >
<br >
If you've made it this far thanks so much for following along, and you may just want to hold onto that Bitcoin for your future (not financial advice) as I mentioned before, I believe this asset will play a prominent role in the future of finance and greater society. This was an extremely fun and rewarding project for me to work on including launching my website <a href="https://zane.fun" class="link" target="_blank">zane.fun</a>. If you care to see more about the deveopment process for this project I'll eventually post some pictures and insights at this link: <a href="https://zane.fun/post/christmas-btc-gallery" class="link" target="_blank">https://zane.fun/post/christmas-btc-gallery</a>.
<br >
<br >
Thanks, and have fun!