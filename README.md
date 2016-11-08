# vLog
```
npm install vhlog
```
### Examples
```
var vlog = require('vlog'); 
vlog.log('text log', 'vhoa');
vlog.error('text error', {'msg':'message message message'});
vlog.trace('text trace', 'vhoa');
vlog.debug('text debug', 'vhoa');
vlog.info('text info', 'vhoa');
```
### Result
```
[INFO] text log vhoa
[ERROR] text error { msg: 'message message message' }
Trace: [TRACE] text trace vhoa
    at trace (E:\htdocs\_test\nodejs\log\node_modules\vlog\index.js:16:19)
    at Object.<anonymous> (E:\htdocs\_test\nodejs\log\test.js:4:6)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Function.Module.runMain (module.js:441:10)
    at startup (node.js:134:18)
    at node.js:962:3
[DEBUG] text debug vhoa
[INFO] text info vhoa
```
