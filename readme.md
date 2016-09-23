# Chrome extension: Block some website

## Reference
- [Switcheroo Redirector](https://chrome.google.com/webstore/detail/cnmciclhnghalnpfhhleggldniplelbg)

## Update sites

```JavaScript
var b = [];
for(var i=0; i<a.length; i++){
	if(b.indexOf(a[i]) === -1){
		b.push(a[i]);
	}
}
console.log(b.join(' '));
```

## Usage
- [Download this zip](archive/master.zip)
- Load unpacked extension in [Google Chrome](chrome://extensions/)
