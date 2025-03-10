# [16.1.0](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/compare/ɵcomponents-16.0.0...ɵcomponents-16.1.0) (2023-06-02)


### Bug Fixes

* **ɵcomponents:** include all SASS files, but only if they are not contained in the directory /@scion/ or its subdirectories ([7fc0eb0](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/7fc0eb0632932a4cd1683ebe94a8d93717f5dcbe))


### Features

* **ɵcomponents:** accept passing `undefined` in optional inputs ([9fc3b12](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/9fc3b128db56bbf58483b72feeff733357986c82))
* **ɵcomponents:** mark required inputs as required ([71264fa](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/71264faf6ae074b47127beee993e4615b9fa2fa8))
* **ɵcomponents:** migrate to standalone components ([eb79b56](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/eb79b56c8109b9dbc3276963f761977bc982a62f))



# [16.0.0](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/compare/ɵcomponents-15.0.1...ɵcomponents-16.0.0) (2023-05-15)


### Dependencies

* **ɵcomponents:** update `@scion/components.internal` to Angular 16 ([f1813e6](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/f1813e6440cc44660e7da8d3a71466cd59ee7c7c)), closes [#151](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/issues/151)


### Features

* **ɵcomponents:** improve accessibility of internal components ([5555800](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/5555800704ea9f67dd90d931714972caeecad52a))


### BREAKING CHANGES

* **ɵcomponents:** Updating `@scion/components.internal` to Angular 16 introduced a breaking change.

  To migrate:
  - Update your application to Angular 16; for detailed migration instructions, refer to https://v16.angular.io/guide/update-to-latest-version;



## [15.0.1](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/compare/ɵcomponents-15.0.0...ɵcomponents-15.0.1) (2023-04-19)


### Bug Fixes

* **ɵcomponents/filter-field:** do not stop propagation of mouse events ([87cac1f](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/87cac1fc17ce84514def805d250acabe87db513f))
* **ɵcomponents/filter-field:** ignore keyboard event if its target is equal to the input element ([fe04fd1](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/fe04fd199e32923ba71ee8eafd61bba8fd398dc2))



# [15.0.0](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/compare/ɵcomponents-14.0.1...ɵcomponents-15.0.0) (2022-12-07)


### Dependencies

* **ɵcomponents:** update `@scion/components.internal` to Angular 15 ([2dd75b5](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/2dd75b5e77e19fec95e4b97b846df7bfe3e2ddfb)), closes [#112](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/issues/112)


### BREAKING CHANGES

* **ɵcomponents:** Updating `@scion/components.internal` to Angular 15 introduced a breaking change.

  To migrate:
  - update your application to Angular 15; for detailed migration instructions, refer to https://v15.angular.io/guide/update-to-latest-version;



## [14.0.1](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/compare/ɵcomponents-14.0.0...ɵcomponents-14.0.1) (2022-09-09)


### Bug Fixes

* **ɵcomponents/params-enter:** make title optional ([744f9e2](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/744f9e2fae5ec2fad1795973bd876fb0355a8ea8))
* **ɵcomponents:** fix resolution of SASS modules when linking the library via `tsconfig` path overrides ([bc63340](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/bc6334038a398f650ffecca9d7280ad04e089e0f))



# [14.0.0](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/compare/ɵcomponents-13.0.1...ɵcomponents-14.0.0) (2022-08-16)


### Dependencies

* **ɵcomponents:** update @scion/components.internal to Angular 14 ([1089d2a](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/1089d2aa042759168fe867a47c338edb99593de4)), closes [#96](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/issues/96)


### BREAKING CHANGES

* **ɵcomponents:** Updating `@scion/components.internal` to Angular 14 introduced a breaking change.

  To migrate:
  - update your application to Angular 14; for detailed migration instructions, refer to https://v14.angular.io/guide/update-to-latest-version;
  - update @scion/components to version 14; for detailed migration instructions, refer to https://github.com/SchweizerischeBundesbahnen/scion-toolkit/blob/master/CHANGELOG_COMPONENTS.md;
  - update @scion/components.internal to version 14; for detailed migration instructions, refer to https://github.com/SchweizerischeBundesbahnen/scion-toolkit/blob/master/CHANGELOG_COMPONENTS_INTERNAL.md;


## [13.0.1](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/compare/ɵcomponents-13.0.0...ɵcomponents-13.0.1) (2022-05-18)


### Bug Fixes

* **ɵcomponents:** add Protractor as optional peer dependency as used by page objects ([ac7cd26](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/ac7cd26466dcaffedbf2796d163674d8f528b837))



# [13.0.0](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/compare/13.0.0-beta.2...ɵcomponents-13.0.0) (2022-05-17)


### Features

* **toolkit:** separate toolkit into `@scion/toolkit` and `@scion/components` ([b8845d1](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/commit/b8845d1aad38f9e1e8c3b4b9ad61966987a6cb75)), closes [#77](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/issues/77)


### BREAKING CHANGES

* **toolkit:** Separating the toolkit into `@scion/toolkit` and `@scion/components` introduced a breaking change.

  #### Migration of framework-agnostic tools
  
  Below is the list of framework-agnostic tools:
  - `@scion/toolkit/bean-manager`
  - `@scion/toolkit/observable`
  - `@scion/toolkit/operators`
  - `@scion/toolkit/storage`
  - `@scion/toolkit/util`
  - `@scion/toolkit/uuid`
  
  To migrate:
  - Install the NPM module `@scion/toolkit` in version `1.0.0` using the following command: `npm install @scion/toolkit --save`. Note that the toolkit was previously released as pre-releases of version `13.0.0` or older.
  
  #### Migration of Angular-specific components and directives
  
  The following Angular-specific tools have been moved from `@scion/toolkit` to `@scion/components`:
  - `@scion/toolkit/dimension`
  - `@scion/toolkit/sashbox`
  - `@scion/toolkit/splitter`
  - `@scion/toolkit/throbber`
  - `@scion/toolkit/viewport`
  
  To migrate:
  - Install the NPM module `@scion/components` in version `13.0.0` using the following command: `npm install @scion/components @scion/toolkit @angular/cdk --save`
  - Search and replace the following imports:
    - `@scion/toolkit/dimension` ➜ `@scion/components/dimension`
    - `@scion/toolkit/sashbox` ➜ `@scion/components/sashbox`
    - `@scion/toolkit/splitter` ➜ `@scion/components/splitter`
    - `@scion/toolkit/throbber` ➜ `@scion/components/throbber`
    - `@scion/toolkit/viewport` ➜ `@scion/components/viewport`
  - If you use the viewport scrollbar in other viewport implementations, such as CDK's virtual scroll viewport, follow these steps:
    - Load SASS mixins as SASS module via the `@use` rule instead of the `@import` rule, as follows:
      - `@import '~@scion/toolkit/viewport/scrollbar';` ➜ `@use '@scion/components' as sci-components;`
    - We have renamed the scrollbar style mixins. See  [viewport description](https://github.com/SchweizerischeBundesbahnen/scion-toolkit/blob/master/docs/site/tools/viewport.md) for a full example. Migrate as follows:
      - `@include hide-scrollbars-when-inactive();` ➜ `@include sci-components.scrollbar-hide-when-inactive();`
      - `@include scrollbar();` ➜ `@include sci-components.scrollbar-position();`



***
**SEPARATION OF @SCION/TOOLKIT INTO @SCION/TOOLKIT@1.0.0 AND @SCION/COMPONENTS@13.0.0**

Previously, framework-agnostic and Angular-specific tools were published as a single NPM package, which often led to confusion and prevented framework-agnostic tools from having a release cycle independent of the Angular project.

Therefore, we have moved Angular-specific components and directives to the NPM package `@scion/components`. It will continue to be versioned according to the Angular major release train. On the other hand, framework-agnostic tools will continue to be released under `@scion/toolkit`, but now starting with version `1.0.0` instead of pre-release versions.

The changelog before the separation into `@scion/toolkit` and `@scion/components` can be found [here](/docs/site/changelog-toolkit/changelog.md).

***
