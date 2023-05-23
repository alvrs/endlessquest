# autonomousworlds-hack

Repo for the [Autonomous Worlds Hackaton](https://ethglobal.com/events/autonomous)

May 18th to 26th 2023

### Team:

* Mataleone
* Recipromancer
* Chromuh
* Mentis


# Repo Structure

external dependencies:

* @lattice packages
* Endless Crawler [mainnet contracts](https://etherscan.io/address/0x8e70b94c57b0cbc9807c0f58bc251f4cd96acdb0#code)
* Endless Crawler [mainnet contracts](https://etherscan.io/address/0x8e70b94c57b0cbc9807c0f58bc251f4cd96acdb0#code)


## `MUD`

A React MUD engine

### Run local server

You need Foundry! (see below)

```
$ pnpm run dev
```

### OpenAI API Keys

OpenAI API keys enabled for `GPT-4` need to be on cookies. The first time the app is loaded on a browser, empty cookies will be created for editing, if they are not present.

```
OPENAI_API_KEY:<api_key>
OPENAI_ORG_ID:<org_id>
```



### How MUD was installed (FYI)

Install [Node.js 18](https://nodejs.org/en/download)

```
$ node --version
v18.16.0
```

Install [Foundry](https://github.com/foundry-rs) ([docs](https://book.getfoundry.sh/getting-started/installation))

```
$ brew install libusb
$ curl -L https://foundry.paradigm.xyz | bash
# restart the terminal or open a new one
$ foundryup
```

Created with...

```
$ node --version
v18.16.0
$ npm install -g pnpm
$ pnpm create mud@canary MUD
? Template
> react
```

## `MUD2`

A Phaser MUD engine

Created with...

```
$ pnpm create mud@canary MUD
? Template
> phaser
```


