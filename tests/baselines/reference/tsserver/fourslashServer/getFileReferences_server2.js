currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/packages/client/index.ts]
import "@shared/referenced";

//// [/packages/client/tsconfig.json]
{ "compilerOptions": { "paths": { "@shared/*": ["../shared/src/*"] } }, "references": [{ "path": "../shared" }] }

//// [/packages/server/index.js]
const mod = require("../shared/src/referenced");

//// [/packages/server/router.js]
const blah = require("../shared/dist/referenced");

//// [/packages/server/tsconfig.json]
{ "compilerOptions": { "checkJs": true }, "references": [{ "path": "../shared" }] }

//// [/packages/shared/src/referenced.ts]
export {};

//// [/packages/shared/tsconfig.json]
{ "compilerOptions": { "rootDir": "src", "outDir": "dist", "composite": true } }

//// [/tsconfig.json]
{ "files": [], "references": [{ "path": "packages/server" }, { "path": "packages/client" }] }


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/tsconfig.json"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /tsconfig.json ProjectRootPath: undefined:: Result: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json : {
 "rootNames": [],
 "options": {
  "configFilePath": "/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/packages/server",
   "originalPath": "packages/server"
  },
  {
   "path": "/packages/client",
   "originalPath": "packages/client"
  }
 ]
}
Info seq  [hh:mm:ss:mss] Config: /packages/server/tsconfig.json : {
 "rootNames": [
  "/packages/server/index.js",
  "/packages/server/router.js"
 ],
 "options": {
  "checkJs": true,
  "configFilePath": "/packages/server/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/packages/shared",
   "originalPath": "../shared"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/server/tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/server 1 undefined Config: /packages/server/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/server 1 undefined Config: /packages/server/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /packages/client/tsconfig.json : {
 "rootNames": [
  "/packages/client/index.ts"
 ],
 "options": {
  "paths": {
   "@shared/*": [
    "../shared/src/*"
   ]
  },
  "pathsBasePath": "/packages/client",
  "configFilePath": "/packages/client/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/packages/shared",
   "originalPath": "../shared"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/client/tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/client 1 undefined Config: /packages/client/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/client 1 undefined Config: /packages/client/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Config: /packages/shared/tsconfig.json : {
 "rootNames": [
  "/packages/shared/src/referenced.ts"
 ],
 "options": {
  "rootDir": "/packages/shared/src",
  "outDir": "/packages/shared/dist",
  "composite": true,
  "configFilePath": "/packages/shared/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/shared/tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/shared 1 undefined Config: /packages/shared/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/shared 1 undefined Config: /packages/shared/tsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /tsconfig.json ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/tsconfig.json SVC-1-0 "{ \"files\": [], \"references\": [{ \"path\": \"packages/server\" }, { \"path\": \"packages/client\" }] }"


	lib.d.ts
	  Default library for target 'es5'
	lib.decorators.d.ts
	  Library referenced via 'decorators' from file 'lib.d.ts'
	lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file 'lib.d.ts'
	tsconfig.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0) InitialLoadPending

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 0,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/packages/client/tsconfig.json: *new*
  {"pollingInterval":2000}
/packages/server/tsconfig.json: *new*
  {"pollingInterval":2000}
/packages/shared/tsconfig.json: *new*
  {"pollingInterval":2000}
/tsconfig.json: *new*
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/packages/client: *new*
  {}
/packages/server: *new*
  {}
/packages/shared: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
    initialLoadPending: true
    noOpenRef: true

ScriptInfos::
/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/tsconfig.json (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/packages/server/index.js"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /packages/server/index.js ProjectRootPath: undefined:: Result: /packages/server/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /packages/server/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/packages/server/tsconfig.json",
        "reason": "Creating possible configured project for /packages/server/index.js to open"
      }
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/server/router.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /packages/server/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /packages/shared/src/referenced.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /packages/shared/dist 1 undefined Project: /packages/server/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /packages/shared/dist 1 undefined Project: /packages/server/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /packages/server/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/packages/server/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/packages/shared/src/referenced.ts Text-1 "export {};"
	/packages/server/index.js SVC-1-0 "const mod = require(\"../shared/src/referenced\");"
	/packages/server/router.js Text-1 "const blah = require(\"../shared/dist/referenced\");"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	../shared/src/referenced.ts
	  Imported via "../shared/src/referenced" from file 'index.js'
	  Imported via "../shared/dist/referenced" from file 'router.js'
	index.js
	  Matched by default include pattern '**/*'
	router.js
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/packages/server/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/packages/server/index.js",
        "configFile": "/packages/server/tsconfig.json",
        "diagnostics": [
          {
            "text": "Cannot write file '/packages/server/index.js' because it would overwrite input file.",
            "code": 5055,
            "category": "error"
          },
          {
            "text": "Cannot write file '/packages/server/router.js' because it would overwrite input file.",
            "code": 5055,
            "category": "error"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0) InitialLoadPending

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/packages/server/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /packages/server/index.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /packages/server/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/packages/client/tsconfig.json:
  {"pollingInterval":2000}
/packages/server/router.js: *new*
  {"pollingInterval":500}
/packages/server/tsconfig.json:
  {"pollingInterval":2000}
/packages/shared/src/referenced.ts: *new*
  {"pollingInterval":500}
/packages/shared/tsconfig.json:
  {"pollingInterval":2000}
/tsconfig.json:
  {"pollingInterval":2000}

watchedDirectoriesRecursive::
/packages/client:
  {}
/packages/server:
  {}
/packages/shared:
  {}
/packages/shared/dist: *new*
  {}

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/server/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
    initialLoadPending: true
    noOpenRef: false *changed*

ScriptInfos::
/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /packages/server/tsconfig.json *new*
/lib.decorators.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /packages/server/tsconfig.json *new*
/lib.decorators.legacy.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /packages/server/tsconfig.json *new*
/packages/server/index.js (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /packages/server/tsconfig.json *default*
/packages/server/router.js *new*
    version: Text-1
    containingProjects: 1
        /packages/server/tsconfig.json
/packages/shared/src/referenced.ts *new*
    version: Text-1
    containingProjects: 1
        /packages/server/tsconfig.json
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/packages/client/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /packages/client/index.ts ProjectRootPath: undefined:: Result: /packages/client/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /packages/client/tsconfig.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/packages/client/tsconfig.json",
        "reason": "Creating possible configured project for /packages/client/index.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /packages/client/tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /packages/client/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/packages/client/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/packages/shared/src/referenced.ts Text-1 "export {};"
	/packages/client/index.ts SVC-1-0 "import \"@shared/referenced\";"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	../shared/src/referenced.ts
	  Imported via "@shared/referenced" from file 'index.ts'
	index.ts
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/packages/client/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/packages/client/index.ts",
        "configFile": "/packages/client/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0) InitialLoadPending

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/packages/server/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/packages/client/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /packages/server/index.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /packages/server/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /packages/client/index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /packages/client/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 2,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/client/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/packages/server/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
    initialLoadPending: true

ScriptInfos::
/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject1*
        /packages/server/tsconfig.json
        /packages/client/tsconfig.json *new*
/lib.decorators.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject1*
        /packages/server/tsconfig.json
        /packages/client/tsconfig.json *new*
/lib.decorators.legacy.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject1*
        /packages/server/tsconfig.json
        /packages/client/tsconfig.json *new*
/packages/client/index.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /packages/client/tsconfig.json *default*
/packages/server/index.js (Open)
    version: SVC-1-0
    containingProjects: 1
        /packages/server/tsconfig.json *default*
/packages/server/router.js
    version: Text-1
    containingProjects: 1
        /packages/server/tsconfig.json
/packages/shared/src/referenced.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /packages/server/tsconfig.json
        /packages/client/tsconfig.json *new*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/packages/shared/src/referenced.ts"
      },
      "command": "fileReferences"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "fileReferences",
      "request_seq": 3,
      "success": true,
      "body": {
        "refs": [
          {
            "file": "/packages/server/index.js",
            "start": {
              "line": 1,
              "offset": 22
            },
            "end": {
              "line": 1,
              "offset": 46
            },
            "contextStart": {
              "line": 1,
              "offset": 1
            },
            "contextEnd": {
              "line": 1,
              "offset": 49
            },
            "lineText": "const mod = require(\"../shared/src/referenced\");",
            "isWriteAccess": false
          },
          {
            "file": "/packages/server/router.js",
            "start": {
              "line": 1,
              "offset": 23
            },
            "end": {
              "line": 1,
              "offset": 48
            },
            "contextStart": {
              "line": 1,
              "offset": 1
            },
            "contextEnd": {
              "line": 1,
              "offset": 51
            },
            "lineText": "const blah = require(\"../shared/dist/referenced\");",
            "isWriteAccess": false
          },
          {
            "file": "/packages/client/index.ts",
            "start": {
              "line": 1,
              "offset": 9
            },
            "end": {
              "line": 1,
              "offset": 27
            },
            "contextStart": {
              "line": 1,
              "offset": 1
            },
            "contextEnd": {
              "line": 1,
              "offset": 29
            },
            "lineText": "import \"@shared/referenced\";",
            "isWriteAccess": false
          }
        ],
        "symbolName": "\"/packages/shared/src/referenced.ts\""
      }
    }