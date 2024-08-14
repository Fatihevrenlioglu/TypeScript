currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/index.ts]
export * from "./util";

//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/test.ts]
import "./util";

//// [/tsconfig.build.json]
{ "compilerOptions": { "rootDir": "src", "outDir": "dist/build", "composite": true }, "files": ["index.ts"] }

//// [/tsconfig.json]
{ "files": [], "references": [{ "path": "tsconfig.build.json" }, { "path": "tsconfig.test.json" }] }

//// [/tsconfig.test.json]
{ "compilerOptions": { "rootDir": "src", "outDir": "dist/test", "composite": true }, "files": ["test.ts", "index.ts"] }

//// [/util.ts]
export {}


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
   "path": "/tsconfig.build.json",
   "originalPath": "tsconfig.build.json"
  },
  {
   "path": "/tsconfig.test.json",
   "originalPath": "tsconfig.test.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] Config: /tsconfig.build.json : {
 "rootNames": [
  "/index.ts"
 ],
 "options": {
  "rootDir": "/src",
  "outDir": "/dist/build",
  "composite": true,
  "configFilePath": "/tsconfig.build.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.build.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /tsconfig.test.json : {
 "rootNames": [
  "/test.ts",
  "/index.ts"
 ],
 "options": {
  "rootDir": "/src",
  "outDir": "/dist/test",
  "composite": true,
  "configFilePath": "/tsconfig.test.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.test.json 2000 undefined Project: /tsconfig.json WatchType: Config file
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
	/tsconfig.json SVC-1-0 "{ \"files\": [], \"references\": [{ \"path\": \"tsconfig.build.json\" }, { \"path\": \"tsconfig.test.json\" }] }"


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
/tsconfig.build.json: *new*
  {"pollingInterval":2000}
/tsconfig.json: *new*
  {"pollingInterval":2000}
/tsconfig.test.json: *new*
  {"pollingInterval":2000}

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
        "file": "/index.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /index.ts ProjectRootPath: undefined:: Result: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.build.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/tsconfig.build.json",
        "reason": "Creating project referenced in solution /tsconfig.json to find possible configured project for /index.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.build.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /util.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.build.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.build.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/util.ts Text-1 "export {}"
	/index.ts SVC-1-0 "export * from \"./util\";"


	lib.d.ts
	  Default library for target 'es5'
	lib.decorators.d.ts
	  Library referenced via 'decorators' from file 'lib.d.ts'
	lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file 'lib.d.ts'
	util.ts
	  Imported via "./util" from file 'index.ts'
	index.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/tsconfig.build.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/index.ts",
        "configFile": "/tsconfig.build.json",
        "diagnostics": [
          {
            "text": "File '/index.ts' is not under 'rootDir' '/src'. 'rootDir' is expected to contain all source files.\n  The file is in the program because:\n    Part of 'files' list in tsconfig.json",
            "code": 6059,
            "category": "error",
            "relatedInformation": [
              {
                "span": {
                  "start": {
                    "line": 1,
                    "offset": 97
                  },
                  "end": {
                    "line": 1,
                    "offset": 107
                  },
                  "file": "/tsconfig.build.json"
                },
                "message": "File is matched by 'files' list specified here.",
                "category": "message",
                "code": 1410
              }
            ]
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0) InitialLoadPending

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/tsconfig.build.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.build.json
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
/tsconfig.build.json:
  {"pollingInterval":2000}
/tsconfig.json:
  {"pollingInterval":2000}
/tsconfig.test.json:
  {"pollingInterval":2000}
/util.ts: *new*
  {"pollingInterval":500}

Projects::
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.build.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
    initialLoadPending: true
    noOpenRef: false *changed*

ScriptInfos::
/index.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /tsconfig.build.json *default*
/lib.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /tsconfig.build.json *new*
/lib.decorators.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /tsconfig.build.json *new*
/lib.decorators.legacy.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/inferredProject1*
        /tsconfig.build.json *new*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/util.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.build.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/test.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /test.ts ProjectRootPath: undefined:: Result: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.test.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/tsconfig.test.json",
        "reason": "Creating project referenced in solution /tsconfig.json to find possible configured project for /test.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.test.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.test.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.test.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/util.ts Text-1 "export {}"
	/test.ts SVC-1-0 "import \"./util\";"
	/index.ts SVC-1-0 "export * from \"./util\";"


	lib.d.ts
	  Default library for target 'es5'
	lib.decorators.d.ts
	  Library referenced via 'decorators' from file 'lib.d.ts'
	lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file 'lib.d.ts'
	util.ts
	  Imported via "./util" from file 'test.ts'
	  Imported via "./util" from file 'index.ts'
	test.ts
	  Part of 'files' list in tsconfig.json
	index.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/tsconfig.test.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/test.ts",
        "configFile": "/tsconfig.test.json",
        "diagnostics": [
          {
            "text": "File '/index.ts' is not under 'rootDir' '/src'. 'rootDir' is expected to contain all source files.\n  The file is in the program because:\n    Part of 'files' list in tsconfig.json",
            "code": 6059,
            "category": "error",
            "relatedInformation": [
              {
                "span": {
                  "start": {
                    "line": 1,
                    "offset": 107
                  },
                  "end": {
                    "line": 1,
                    "offset": 117
                  },
                  "file": "/tsconfig.test.json"
                },
                "message": "File is matched by 'files' list specified here.",
                "category": "message",
                "code": 1410
              }
            ]
          },
          {
            "text": "File '/test.ts' is not under 'rootDir' '/src'. 'rootDir' is expected to contain all source files.\n  The file is in the program because:\n    Part of 'files' list in tsconfig.json",
            "code": 6059,
            "category": "error",
            "relatedInformation": [
              {
                "span": {
                  "start": {
                    "line": 1,
                    "offset": 96
                  },
                  "end": {
                    "line": 1,
                    "offset": 105
                  },
                  "file": "/tsconfig.test.json"
                },
                "message": "File is matched by 'files' list specified here.",
                "category": "message",
                "code": 1410
              }
            ]
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (0) InitialLoadPending

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/tsconfig.build.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/tsconfig.test.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /tsconfig.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /index.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.build.json,/tsconfig.test.json
Info seq  [hh:mm:ss:mss] 	FileName: /test.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.test.json
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
/tsconfig.build.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured)
    projectStateVersion: 1
    projectProgramVersion: 0
    dirty: true
    initialLoadPending: true
/tsconfig.test.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/index.ts (Open) *changed*
    version: SVC-1-0
    containingProjects: 2 *changed*
        /tsconfig.build.json *default*
        /tsconfig.test.json *new*
/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject1*
        /tsconfig.build.json
        /tsconfig.test.json *new*
/lib.decorators.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject1*
        /tsconfig.build.json
        /tsconfig.test.json *new*
/lib.decorators.legacy.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /dev/null/inferredProject1*
        /tsconfig.build.json
        /tsconfig.test.json *new*
/test.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /tsconfig.test.json *default*
/tsconfig.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/util.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /tsconfig.build.json
        /tsconfig.test.json *new*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/util.ts"
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
            "file": "/index.ts",
            "start": {
              "line": 1,
              "offset": 16
            },
            "end": {
              "line": 1,
              "offset": 22
            },
            "contextStart": {
              "line": 1,
              "offset": 1
            },
            "contextEnd": {
              "line": 1,
              "offset": 24
            },
            "lineText": "export * from \"./util\";",
            "isWriteAccess": false
          },
          {
            "file": "/test.ts",
            "start": {
              "line": 1,
              "offset": 9
            },
            "end": {
              "line": 1,
              "offset": 15
            },
            "contextStart": {
              "line": 1,
              "offset": 1
            },
            "contextEnd": {
              "line": 1,
              "offset": 17
            },
            "lineText": "import \"./util\";",
            "isWriteAccess": false
          }
        ],
        "symbolName": "\"/util.ts\""
      }
    }