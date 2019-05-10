# HMS Core Library

This library provides common components which use in other Angular projects. Currently, we have 4 components implemented and publish to public NPM.

## Table Of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Install](#install)
    * [Import the library to project](#import-the-library-to-project)
* [About HMS Core Components](#about-hms-core-components)
* [Models](#models)
* [Running Unit Test](#running-unit-test)
* [Author](#author)


## Getting Started

### Dependencies 
| Dependencies  | Version        | 
| :-----------: |:--------------:|
| Angular       | ^7.2.0         |
| Bootstrap     | ^4.3.1         |
| Ng-Bootstrap  | ^4.1.2         |

### Install

First thing, You need to an Angular project which you generate by Angular CLI.
After that, You need to install [Bootstrap CSS/SCSS](https://www.npmjs.com/package/bootstrap) and [Ng-Bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) on either Dependencies or Dev Dependencies (--save-dev). You need to make sure about you imported bootstrap CSS/SCSS to your project.
```scss
// styles.scss
    @import '../../../node_modules/bootstrap/scss/bootstrap.scss';
```
```css
// styles.css
    @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```
> About ".../.../.../" or ".../" at URL prefix, It's belong to project structure you have.

Then you can get our library from NPM as below:
```shell
npm i hms-core
```
```shell
npm install hms-core
```

### Import the library to project

Now, you need to import the library to any modules that you need as the following example
```ts
// app.module.ts
...
import { HmsCoreModule } from 'hms-core'; // <-- Declare importting module from hms-core here
...

@NgModule({
    declarations: [
        AppComponent,
        ...
    ],
    imports: [
        ...,
        HmsCoreModule, // <-- Import the library here
        ...
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
## About HMS Core Components

### Login

The Login component is provided to any users in system could use their Email, Password to login into applications.

```html
<hms-login [loginLanguages]="loginLanguage" [loginSignal]="loginSignal" (signIn)="onSignIn($event)" (signOut)="onSignOut()"></hms-login>
```
| Decorator | Name | Type | Require | Description |
|:--------:|:-------:|:--------:|:--------:|:-----------:|
| @Input | loginLanguages | LoginLanguages | Optional | Support multiple languages (i18n) for texts, labels in Login Component |
| @Input | loginSignal | LoginSignal | Required | Get signal from external about login valid or invalid |
| @Output | signIn | EventEmitter\<LoginUser\> | Optional | Emit LoginUser instance to external component |
| @Output | signUp | EventEmitter\<boolean\> | Optional | Emit signal boolean to external component |

### Header

The Header component is provided to show Routes Menu, Logo, User Avatar and Actions.

```html
<hms-header [headerData]="headerData" (searchTerm)="onSearch($event)" (updateProfile)="onUpdateProfile()" (changePassword)="onChangePassword()" (signOut)="onSignOut()"></hms-header>
```
| Decorator | Name | Type | Require | Description |
|:--------:|:-------:|:--------:|:--------:|:-----------:|
| @Input | headerData | Header | Required | Package other models need for header. As Logo, Title, Routes Menu, Multiple Languages for User Menu and so on |
| @Output | searchTerm | EventEmitter\<string\> | Optional | Emit a string from search input |
| @Output | updateProfile | EventEmitter\<boolean\> | Optional | Emit signal about user would like to navigate to "Profile" page to update info |
| @Output | changePassword | EventEmitter\<boolean\> | Optional | Emit signal about user would like to navigate to "Change Password" page to update info |
| @Output | signOut | EventEmitter\<boolean\> | Optional | Emit signal about user would like to sign out |

### Footer

The Footer component is provided to show Logo, CopyRight text.

```html
<hms-footer [footerData]="footerData"></hms-footer>
```
| Decorator | Name | Type | Require | Description |
|:--------:|:-------:|:--------:|:--------:|:-----------:|
| @Input | footerData | Footer | Required | Package other models for CopyRight text and Logo |

### SideBar

The Footer component is provided to show Routes Menu.

```html
<hms-sidebar [sideBarData]="sideBarData"></hms-sidebar>
```
| Decorator | Name | Type | Require | Description |
|:--------:|:-------:|:--------:|:--------:|:-----------:|
| @Input | sideBarData | SideBar | Required | Package other models for Title, Routes Menu |

## Models

### Login

<details>
<summary>Click to expand!</summary>

```shell
//login-languages.model.ts

---LoginLanguages CLASS
-------title?: string;
-------emailLabel?: string;
-------passwordLabel?: string;
-------signInText?: string;
-------signUpText?: string;
-------signUpIntroText?: string;
-------invalidEmailMessageText?: string;
```

```shell
//login-signal.model.ts

---LoginSignal CLASS
-------isValid: string;
-------invalidMessage: string;
```

```shell
//login-user.model.ts

---LoginUser CLASS
-------email: string;
-------password: string;
```
</details>

### Header

<details>
<summary>Click to expand!</summary>

```shell
//header.model.ts

---Header CLASS
-------logo: Logo;
-------title: string;
-------menu: MenuItem[];
-------user: User;
-------userMenuLanguage: UserMenuLanguage;
```

```shell
//logo.model.ts

---Logo CLASS
-------imgUrl: string;
-------alt: string;
-------homePageUrl: string;
```

```shell
//menu-item.model.ts

---MenuItem CLASS
-------displayText: string;
-------url: string;
```

```shell
//user-menu-language.model.ts

---UserMenuLanguage CLASS
-------profile: Logo;
-------changePassword: string;
-------signOut: MenuItem[];
```

```shell
//user.model.ts

---User CLASS
-------firstName: string;
-------lastName: string;
-------email: string;
-------user: string;
```
</details>

### Footer

<details>
<summary>Click to expand!</summary>

```shell
//footer.model.ts

---Footer CLASS
-------copyRightText: string;
-------logo: Logo;
```
</details>

### SideBar

<details>
<summary>Click to expand!</summary>

```shell
//sidebar.model.ts

---SideBar CLASS
-------title: string;
-------menu: string;
```
</details>

## Author
* **Shane - Sang Nguyen** - *Initial work* - [Github](https://github.com/SangNguyenOSD)
