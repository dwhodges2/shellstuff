module.exports = {
  config: {
  
  
      autoProfile: {
      
      prompts: [{
          // 'MyHost:Documents me$ ' default MacOS bash prompt
          pattern: '^(\\S+):(.*) ([a-z_][a-z0-9_\\-\\.]*[\\$]?)[\\$#]\\s*$',
          hostname: 1,
          path: 2,
          username: 3
        },{
          // 'me@MyHost:~$ ' default Linux bash prompt
          pattern: '^([a-z_][a-z0-9_\\-\\.]*[\\$]?)@(\\S+):([\\/~].*)[\\$#]\\s*$',
          username: 1,
          hostname: 2,
          path: 3
        },{
          // 'me@MyHost ~> ' default fish prompt
          pattern: '^([a-z_][a-z0-9_\\-\\.]*[\\$]?)@(\\S+) ([\\/~].*)[>#]\\s*',
          username: 1,
          hostname: 2,
          path: 3
        },{
          // '[me@MyHost: ~]$ ' connect prompt
          pattern: '^\\[(\\S+)@(\\S+) ([\\/~].*)\\][\\$#]\\s*$',
          username: 1,
          hostname: 2,
          path: 3
        },{
          // cunix prompt
          pattern: '^(\\-bash\\-4\\.1)[\\$#]\\s*$',
          hostname: 1
        },{
          // 'time=path> ' dh custom prompt
          pattern: '^(\\d+:\\d+:\\d+)=(.*)[>#]\\s*$',
          path: 2
        }
      ],    
          
      
      profiles: [
      //{
      //    triggers: [
      //     'dwh2128@',
      //    ],
      //    backgroundColor: '#400'
     //   },
        {
          triggers: [
            '@connect' // connect shell
          ],
          backgroundColor: '#212F3C'
        },
        {
          triggers: [
            '@-bash-4.1'  // prompt for cunix shell
          ],
          backgroundColor: '#200'
        },
        {
          triggers: [
            '~'
          ],
          backgroundColor: '#004'
        }
      ],
      stripAnsiColors: true, //default 
      debug: true //default 
    },
  
  
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: '#000',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` if you're using a Linux set up
    // that doesn't shows native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyper-statusline',
    'hyperterm-alternatescroll',
    'hyperterm-atom-dark',
    'hyperterm-dibdabs',
    'hyper-autoprofile'
],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
