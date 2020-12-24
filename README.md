
# Nav tab

![version](https://img.shields.io/github/manifest-json/v/Natjo/dropdown)

Accessible tabulation navigation.

## Usage

### html
```html
<div class="navtab">
	<button class="summary" aria-expanded="true" aria-controls="first">first</button>
	<div id="first" class="content">
		<!-- content first --> 
	</div>
	<button class="summary" aria-expanded="false" aria-controls="second">second</button>
	<div id="second" class="content">
		<!-- content second --> 
	</div>
	<button class="summary" aria-expanded="false" aria-controls="third">third</button>
	<div id="third" class="content">
		<!-- content third --> 
	</div>
</div>
```
### javascript
```javascript
import navtab from './modules/navtab/navtab';
navtab(document.querySelector('.navtab'));
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/yLaXMLM?editors=0011)
