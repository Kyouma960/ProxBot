#####  Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Repository Structure](#repository-structure)
- [ Modules](#modules)
- [ Getting Started](#getting-started)
    - [ Prerequisites](#prerequisites)
    - [ Installation](#installation)
    - [ Usage](#usage)
    - [ Tests](#tests)
- [ Project Roadmap](#project-roadmap)
- [ Contributing](#contributing)
- [ License](#license)
- [ Acknowledgments](#acknowledgments)

---

##  Overview

ProxBot is a Discord bot project designed to enhance user interaction with features like anime card concepts, manga reading, Google searches, anime quotes, and IQ checks. The bot leverages dynamic loading of events and commands for scalability, alongside modules for image processing and humor injection. With a robust server setup and database schema, ProxBot offers a seamless experience for users while providing engaging content and interactive functionalities within Discord channels.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project has a modular architecture that allows for easy addition of new features. It utilizes Discord.js for interactions with Discord APIs and implements various functionalities like roasts, manga reading, and Google searches. |
| 🔌 | **Integrations**  | Key integrations include nekos-best.js, request, discord.js, express, mangadex-full-api, and superagent for various functionalities like image processing, fetching manga data, and server management. |
| 🧩 | **Modularity**    | The codebase is modular, allowing for easy extensibility and maintenance. Events and commands are loaded dynamically, enhancing scalability without needing to modify existing code. |
| 🛡️ | **Security**      | Measures for data protection and access control could be further enhanced by implementing secure coding practices and regular security audits to prevent vulnerabilities. |
| 📦 | **Dependencies**  | The project's dependencies include libraries for Discord interactions, image processing, manga functionalities, and API calls.|

---

##  Repository Structure

```sh
└── ProxBot/
    ├── bin
    │   └── .md_cache
    ├── commands
    │   ├── fun
    │   ├── manga
    │   └── utility
    ├── database
    │   └── main
    ├── events
    │   └── messageCreate.js
    ├── ideas.txt
    ├── index.js
    ├── package-lock.json
    ├── package.json
    ├── replit.nix
    ├── server.js
    ├── src
    │   └── loader.js
    ├── values
    │   ├── config.js
    │   └── roasts.js
    └── work-in-progress
        ├── google
        └── mangalife
```

---

##  Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [package.json](https://github.com/Kyouma960/ProxBot/blob/main/package.json) | Manages project dependencies for the Discord bot, including libraries for interactions with Discord APIs, image processing, and manga-related functionalities. |
| [index.js](https://github.com/Kyouma960/ProxBot/blob/main/index.js) | Establishes Discord bot client, manages intents and partials, loads configuration, and initiates server. Logs in with token for ProxBot operations. |
| [ideas.txt](https://github.com/Kyouma960/ProxBot/blob/main/ideas.txt) | Conceptualize an anime card bot emphasizing each characters distinct special ability. |
| [package-lock.json](https://github.com/Kyouma960/ProxBot/blob/main/package-lock.json) | MessageCreate.js`This code file in the `events` directory of the ProxBot repository handles incoming messages and triggers corresponding actions. It plays a pivotal role in processing messages within the Discord bot architecture. Key features include message parsing, event detection, and dispatching relevant commands to execute actions. The file ensures seamless interaction and responsiveness of the bot in various chat scenarios. |
| [replit.nix](https://github.com/Kyouma960/ProxBot/blob/main/replit.nix) | Manages project dependencies for Node.js, TypeScript, Yarn, and Jest using the replit.nix file in the ProxBot repository. |
| [server.js](https://github.com/Kyouma960/ProxBot/blob/main/server.js) | Enables server to host an active status message. Express handles responses and sets content type. Function keeps server alive on port 3000. Key for repository to maintain online presence, enhancing accessibility for users. |

</details>

<details closed><summary>events</summary>

| File | Summary |
| --- | --- |
| [messageCreate.js](https://github.com/Kyouma960/ProxBot/blob/main/events/messageCreate.js) | Handles message commands by parsing prefixes from user messages and executing corresponding actions using stored configurations. |

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [loader.js](https://github.com/Kyouma960/ProxBot/blob/main/src/loader.js) | Loads events and commands dynamically, enhancing extensibility and maintainability in ProxBots architecture. Dynamically registers events and commands based on file names from specified directories, improving scalability for adding new features without code modifications. |

</details>

<details closed><summary>values</summary>

| File | Summary |
| --- | --- |
| [config.js](https://github.com/Kyouma960/ProxBot/blob/main/values/config.js) | Defines application and markdown options in ProxBot. Manages app prefixes and tokens in `config.js`, and login credentials in `MDopt`. Integral for configuring ProxBots behavior and interactions. |
| [roasts.js](https://github.com/Kyouma960/ProxBot/blob/main/values/roasts.js) | Generates roasts for humorous interactions. Contains witty, sarcastic remarks to tease users. Key feature in the ProxBot repo for injecting humor into conversations. |

</details>

<details closed><summary>bin</summary>

| File | Summary |
| --- | --- |
| [.md_cache](https://github.com/Kyouma960/ProxBot/blob/main/bin/.md_cache) | Stores user session data for the ProxBot application. |

</details>

<details closed><summary>work-in-progress.mangalife</summary>

| File | Summary |
| --- | --- |
| [manread.js](https://github.com/Kyouma960/ProxBot/blob/main/work-in-progress/mangalife/manread.js) | Enables reading manga with navigation buttons for chapter progression and closing. Utilizes Discord.js for interactive UI components. Integrated with external API for manga fetching and display. Aligns with the repositorys manga functionality in the work-in-progress section. |
| [mansearch.js](https://github.com/Kyouma960/ProxBot/blob/main/work-in-progress/mangalife/mansearch.js) | Executes manga search with interactive chapter selection for reading.-Utilizes buttons for navigation and interaction.-Enhances user experience through real-time manga page viewing with customizable controls. |

</details>

<details closed><summary>work-in-progress.google</summary>

| File | Summary |
| --- | --- |
| [anime_quotes_char.js](https://github.com/Kyouma960/ProxBot/blob/main/work-in-progress/google/anime_quotes_char.js) | Retrieves random anime quotes using an external API. Categorized under quotes in the repository structure. Key features include fetching and displaying quotes in Discord using the execute function. |
| [google_search.js](https://github.com/Kyouma960/ProxBot/blob/main/work-in-progress/google/google_search.js) | Generates Google search and image results with interactive buttons for navigation and close functionality in a Discord bot. Parses and displays images along with relevant information. Interactive navigation allows easy browsing of search results directly within Discord. |
| [anime_quotes_show.js](https://github.com/Kyouma960/ProxBot/blob/main/work-in-progress/google/anime_quotes_show.js) | Enables fetching and displaying random anime quotes in response to user queries. Supports the aquotes show command for retrieving and sharing anime quotes via the designated Discord channel within the ProxBot architecture. |

</details>

<details closed><summary>database.main</summary>

| File | Summary |
| --- | --- |
| [main_scheme_1.sql](https://github.com/Kyouma960/ProxBot/blob/main/database/main/main_scheme_1.sql) | Defines SQL database schema for main features; maintains data integrity and relationships. |

</details>

<details closed><summary>commands.utility</summary>

| File | Summary |
| --- | --- |
| [google_image_search.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/utility/google_image_search.js) | Creates interactive Google image search in Discord, allowing users to navigate through results with back and forward buttons. Fetches images using RapidAPI, displays key information, and allows closing the embed. |
| [quotes.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/utility/quotes.js) | Retrieves a random quote via a third-party API and sends it to Discord. Enhances user experience with dynamic content. Located in the utility section of the ProxBot repository. |
| [sauce.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/utility/sauce.js) | Retrieves image source using SauceNAO API based on Discord message attachments.-Parses API response for metadata and sends image source, thumbnail, and external URL to the channel. |
| [facts.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/utility/facts.js) | Generates random facts or roasts based on user commands using Discord.js and external API. Centralized in the commands/utility directory, it enhances the ProxBot server by providing interactive and engaging content to users. |
| [anime_quotes_random.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/utility/anime_quotes_random.js) | Retrieves random anime character quotes from APIs, formats them into visual messages, and sends them to Discord channels. Supports dual API calls and dynamic character image display based on fan favorites. |
| [character.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/utility/character.js) | Retrieves character info** from Jikan API based on user input and sends an embedded message with details if the character exists. Handles errors elegantly. A crucial utility feature enhancing user experience within the Discord bot ecosystem. |

</details>

<details closed><summary>commands.manga</summary>

| File | Summary |
| --- | --- |
| [read.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/manga/read.js) | Enables users to read manga seamlessly by fetching chapters, displaying them with adjustable navigation buttons, and providing a user-friendly interface. Integrated with Mangadex API and Discord.js, this feature enriches the repositorys manga category functionality. |
| [search.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/manga/search.js) | Enables users to search and read manga via Discord. Retrieves manga search results, allows users to choose and read chapters with navigation buttons, enhancing the manga reading experience within the Discord environment. |

</details>

<details closed><summary>commands.fun</summary>

| File | Summary |
| --- | --- |
| [checkiq.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/fun/checkiq.js) | Implements a Discord bot command to check IQ levels with witty responses based on user IDs. Handles special cases with unique messages and generates a random IQ score, providing corresponding feedback. |
| [sendnudes.js](https://github.com/Kyouma960/ProxBot/blob/main/commands/fun/sendnudes.js) | Generates engaging content by sending fun-themed images dynamically based on a random value. Employs Discord.js to craft embeds for nudges. Promotes the server through footers. Contributing to ProxBots commands directory and enhancing user interaction experience. |

</details>

---

##  Getting Started

###  Prerequisites

**JavaScript**: `version x.y.z`

###  Installation

Build the project from source:

1. Clone the ProxBot repository:
```sh
❯ git clone https://github.com/Kyouma960/ProxBot
```

2. Navigate to the project directory:
```sh
❯ cd ProxBot
```

3. Install the required dependencies:
```sh
❯ npm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ node app.js
```

###  Tests

Execute the test suite using the following command:

```sh
❯ npm test
```

---

##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/Kyouma960/ProxBot/issues)**: Submit bugs found or log feature requests for the `ProxBot` project.
- **[Submit Pull Requests](https://github.com/Kyouma960/ProxBot/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Kyouma960/ProxBot/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Kyouma960/ProxBot
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Kyouma960/ProxBot/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Kyouma960/ProxBot">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
