<a href="/README.md"><img src="/resources/branding/scion-toolkit-banner.svg" height="50" alt="SCION Toolkit"></a>

| SCION Toolkit | [Projects Overview][menu-projects-overview] | [Changelog][menu-changelog] | [Contributing][menu-contributing] | [Sponsoring][menu-sponsoring] |  
| --- | --- | --- | --- | --- |

## [SCION Toolkit][menu-home] > Throbber

The NPM sub-module `@scion/components/throbber` provides an animated graphical Angular component to indicate the execution of an action. A throbber is commonly referred to as spinner.

***
Click [here](https://components.scion.vercel.app/#/sci-throbber) for a demo of the throbber component and supported throbber types in our internal test application.
***

<!--- INSTALLATION AND USAGE --->
<details>
  <summary><strong>Installation and Usage</strong></summary>

1. Install `@scion/components` using the NPM command-line tool: 
   ```
   npm install @scion/components @scion/toolkit @angular/cdk --save
   ```
   > The library requires some peer dependencies to be installed. By using the above command, those are installed as well.

1. Import `SciViewportComponent` in your component.

   ```typescript
   import {SciThrobberComponent} from '@scion/components/throbber';

   @Component({
     // other metadata skipped
     standalone: true,
     imports: [SciThrobberComponent]
   })
   export class YourComponent {
   }
   ```

   Alternatively, import `SciThrobberModule` in the `NgModule` that declares your component.

   ```typescript
   import {SciThrobberModule} from '@scion/components/throbber';

   @NgModule({
     imports: [SciThrobberModule]
   })
   export class AppModule {
   }
   ```

1. Add `sci-throbber` component as following:

   ```html
   <sci-throbber></sci-throbber>
   ````
</details>

<details>
  <summary><strong>Throbber types</strong></summary>
  
You can choose between different throbber presentations by setting the `type` property to one of the below values.

- **ellipsis**\
  Represents a throbber as an ellipsis consisting of three horizontally arranged points that appear one after the other.
- **ripple**\
  Represents a throbber with a rippled, centric wave effect, similar to throwing a stone into water.
- **roller**\
  Represents a circular throbber with points rotating around the center of a circle. Points have a delayed acceleration, which leads to an accordion effect.
- **spinner** (default)\
  Represents a classic spinner throbber with strokes arranged radially. The strokes light up one after the other in clockwise direction and then then fade out again.
  
Example:
```html
<sci-throbber type="ellipsis"></sci-throbber>
````

</details>

<!--- CSS STYLING --->
<details>
  <summary><strong>CSS Styling</strong></summary>

You can override the following CSS variables to control color, size, and animation duration.

- `--sci-throbber-color`\
  Sets the color of the throbber (by default, uses `lightgray`).

- `--sci-throbber-size`\
  Defines the size of the throbber. Most throbbers are quadratic having the same width and height. For non-quadratic throbbers, the size usually specifies the height (by default, uses `50px`).

- `--sci-throbber-duration`\
  Sets the duration of a single animation cycle (by default, uses `1.25s`).


Example of how to set CSS variables:
```css 
sci-throbber {
  --sci-throbber-color: blue;
  --sci-throbber-size: 50px;
  --sci-throbber-duration: 1s;
}
```

</details>

[menu-home]: /README.md
[menu-projects-overview]: /docs/site/projects-overview.md
[menu-changelog]: /docs/site/changelog.md
[menu-contributing]: /CONTRIBUTING.md
[menu-sponsoring]: /docs/site/sponsoring.md

