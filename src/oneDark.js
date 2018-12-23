module.exports = {
  type: 'dark',
  name: 'Cameo One Dark',
  variant: 'one-dark',
  include: './_ui.json',
  tokenColors: [
    {
      name: 'support.constant.edge',
      scope: 'support.constant.edge',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'regexp constant character-class',
      scope: 'constant.other.character-class.regexp',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'regexp operator.quantifier',
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'punctuation.definition',
      scope:
        'punctuation.definition.string.begin,punctuation.definition.string.end',
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'Text',
      scope: 'variable.parameter.function',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Comments',
      scope: 'comment, punctuation.definition.comment',
      settings: {
        foreground: '#7f848e',
        fontStyle: 'italic'
      }
    },
    {
      name: 'Comment Markup Link',
      scope: 'comment markup.link',
      settings: {
        foreground: '#5c6370'
      }
    },
    {
      name: 'markup diff',
      scope: 'markup.changed.diff',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'diff',
      scope: 'meta.diff.header.from-file,punctuation.definition.from-file.diff',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'inserted.diff',
      scope: 'markup.inserted.diff',
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'deleted.diff',
      scope: 'markup.deleted.diff',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'c++ function',
      scope: 'meta.function.c',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'c++ block',
      scope:
        'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'js/ts punctuation separator key-value',
      scope: 'punctuation.separator.key-value',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'js/ts italic',
      scope:
        'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'js/ts import keyword',
      scope: 'keyword.operator.expression.import',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'math js/ts',
      scope: 'support.constant.math',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'math property js/ts',
      scope: 'support.constant.property.math',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'js/ts variable.other.constant',
      scope: 'variable.other.constant',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'java type',
      scope: 'storage.type.annotation.java',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'java source',
      scope: 'source.java',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'java modifier.import',
      scope:
        'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,storage.type.generic.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,meta.method.body.java',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'java modifier.import',
      scope: 'meta.method.java',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'java modifier.import',
      scope: 'storage.modifier.import.java,storage.type.java',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'java variable.name',
      scope: 'meta.definition.variable.name.java',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'operator logical',
      scope: 'keyword.operator.logical.js',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'operator bitwise',
      scope: 'keyword.operator.bitwise',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'operator channel',
      scope: 'keyword.operator.channel',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'support.constant.property-value.scss',
      scope:
        'support.constant.property-value.scss,support.constant.property-value.css',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'CSS/SCSS/LESS Operators',
      scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'css color standard name',
      scope:
        'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'css comma',
      scope: 'punctuation.separator.list.comma.css',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'css attribute-name.id',
      scope: 'support.constant.color.w3c-standard-color-name.css',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'css property-name',
      scope: 'support.type.vendored.property-name.css',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'js/ts template-expression',
      scope:
        'punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'js/ts module',
      scope:
        'support.module.node,support.type.object.module,support.module.node',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'entity.name.type.module',
      scope: 'entity.name.type.module',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'js variable readwrite',
      scope:
        'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'comment',
      scope: 'comment.line.double-slash,comment.block.documentation',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'js/ts json',
      scope: 'support.constant.json',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'js/ts Keyword',
      scope: [
        'keyword.operator.expression.instanceof',
        'keyword.operator.new',
        'keyword.operator.ternary',
        'keyword.operator.optional'
      ],
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'js/ts console',
      scope: 'support.type.object.console',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'js/ts support.variable.property.process',
      scope: 'support.variable.property.process',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'js console function',
      scope: 'entity.name.function,support.function.console',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'js operator',
      scope: 'keyword.operator',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'js dom',
      scope: 'support.type.object.dom',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'js dom variable',
      scope: 'support.variable.dom,support.variable.property.dom',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'keyword.operator',
      scope:
        'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'C operator assignment',
      scope:
        'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Punctuation',
      scope: 'punctuation.separator.delimiter',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Other punctuation .c',
      scope: 'punctuation.separator.c',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'C type posix-reserved',
      scope: 'support.type.posix-reserved.c',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'keyword.operator.sizeof.c',
      scope: 'keyword.operator.sizeof.c',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'python parameter',
      scope: 'variable.parameter.function.language.python',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'python type',
      scope: 'support.type.python',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'python logical',
      scope: 'keyword.operator.logical.python',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'meta.function-call.arguments.python',
      scope: 'meta.function-call.arguments.python',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'meta.function-call.python',
      scope: 'meta.function-call.python',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'pyCs',
      scope: 'variable.parameter.function.python',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'python block',
      scope:
        'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python,meta.function-call.arguments.python',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'python function-call.generic',
      scope: 'meta.function-call.generic.python',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'python placeholder reset to normal string',
      scope: 'constant.character.format.placeholder.other.python',
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'Delimiters',
      scope: 'none',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Operators',
      scope: 'keyword.operator',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Compound Assignment Operators',
      scope: 'keyword.operator.assignment.compound',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Keywords',
      scope: 'keyword',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Variables',
      scope: 'variable',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Java Variables',
      scope: 'token.variable.parameter.java',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Java Imports',
      scope: 'import.storage.java',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Packages',
      scope: 'token.package.keyword',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Packages',
      scope: 'token.package',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'meta.require',
        'support.function.any-method',
        'variable.function'
      ],
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'Classes',
      scope: 'entity.name.type.namespace',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Classes',
      scope: 'support.class, entity.name.type.class',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Class name',
      scope: 'entity.name.class.identifier.namespace.type',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Class name',
      scope: [
        'entity.name.class',
        'variable.other.class.js',
        'variable.other.class.ts'
      ],
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Class name php',
      scope: 'variable.other.class.php',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Type Name',
      scope: 'entity.name.type',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Keyword Control',
      scope: 'keyword.control',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Python Keyword Control',
      scope: 'keyword.control.import.python,keyword.control.flow.python',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'Control Elements',
      scope: 'control.elements, keyword.operator.less',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Methods',
      scope: 'keyword.other.special-method',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Storage JS TS',
      scope: 'token.storage',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name:
        'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
      scope:
        'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Java Storage',
      scope: 'token.storage.type.java',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Support',
      scope: 'support.function',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'Support type',
      scope: 'support.type.property-name',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Support type',
      scope: 'support.constant.property-value',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Support type',
      scope: 'support.constant.font-name',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Meta tag',
      scope: 'meta.tag',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Strings, Inherited Class',
      scope: 'string, entity.other.inherited-class',
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'Constant other symbol',
      scope: 'constant.other.symbol',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'Integers',
      scope: 'constant.numeric',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Floats',
      scope: 'none',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Boolean',
      scope: 'none',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Constants',
      scope: 'constant',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Constants',
      scope: 'punctuation.definition.constant',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Tags',
      scope: 'entity.name.tag',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Attributes',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Attribute IDs',
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: '#61afef',
        fontStyle: 'normal'
      }
    },
    {
      name: 'Attribute class',
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: '#d19a66',
        fontStyle: 'normal'
      }
    },
    {
      name: 'Selector',
      scope: 'meta.selector',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Values',
      scope: 'none',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'Headings',
      scope: 'markup.heading',
      settings: {
        fontStyle: 'bold',
        foreground: '#e06c75'
      }
    },
    {
      name: 'Headings',
      scope:
        'markup.heading punctuation.definition.heading, entity.name.section',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'Units',
      scope: 'keyword.other.unit',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Bold',
      scope: 'markup.bold,todo.bold',
      settings: {
        fontStyle: 'bold',
        foreground: '#d19a66'
      }
    },
    {
      name: 'Bold',
      scope: 'punctuation.definition.bold',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Italic',
      scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Italic',
      scope: 'emphasis md',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown headings',
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'punctuation.definition.list.begin.markdown',
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown heading setext',
      scope: 'markup.heading.setext',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
      scope: 'punctuation.definition.bold.markdown',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Inline Raw',
      scope: 'markup.inline.raw.markdown',
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Inline Raw',
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
      scope: 'punctuation.definition.list.markdown',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Quote',
      scope: 'markup.quote.markdown',
      settings: {
        foreground: '#5c6370',
        fontStyle: 'italic'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown'
      ],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'beginning.punctuation.definition.list.markdown',
      scope: ['beginning.punctuation.definition.list.markdown'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
      scope: 'punctuation.definition.metadata.markdown',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
      scope:
        'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
      scope:
        'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'markup.italic.markdown',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'markup.bold.markdown',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold'
      }
    },
    {
      name: 'Regular Expressions',
      scope: 'string.regexp',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'Escape Characters',
      scope: 'constant.character.escape',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'Embedded',
      scope: 'punctuation.section.embedded, variable.interpolation',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Illegal',
      scope: 'invalid.illegal',
      settings: {
        foreground: '#ffffff'
      }
    },
    {
      name: 'Broken',
      scope: 'invalid.broken',
      settings: {
        foreground: '#ffffff'
      }
    },
    {
      name: 'Deprecated',
      scope: 'invalid.deprecated',
      settings: {
        foreground: '#ffffff'
      }
    },
    {
      name: 'Unimplemented',
      scope: 'invalid.unimplemented',
      settings: {
        foreground: '#ffffff'
      }
    },
    {
      name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
      scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
      scope:
        'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
      scope:
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
      scope:
        'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: '[VSCODE-CUSTOM] JSON Property Name',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
      scope: 'support.type.property-name.json punctuation',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'laravel blade tag',
      scope:
        'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'laravel blade @',
      scope:
        'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'use statement for other classes',
      scope:
        'support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'error suppression',
      scope: 'keyword.operator.error-control.php',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'php instanceof',
      scope: 'keyword.operator.type.php',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'style double quoted array index normal begin',
      scope: 'punctuation.section.array.begin.php',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'style double quoted array index normal end',
      scope: 'punctuation.section.array.end.php',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'php illegal.non-null-typehinted',
      scope: 'invalid.illegal.non-null-typehinted.php',
      settings: {
        foreground: '#f44747'
      }
    },
    {
      name: 'php types',
      scope:
        'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'php call-function',
      scope:
        'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'php function-resets',
      scope:
        'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'support php constants',
      scope:
        'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'php goto',
      scope: 'entity.name.goto-label.php,support.other.php',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'php logical/bitwise operator',
      scope:
        'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'php regexp operator',
      scope: 'keyword.operator.regexp.php',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'php comparison',
      scope: 'keyword.operator.comparison.php',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'php dollar sign',
      scope: 'punctuation.definition.variable.php',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'php heredoc/nowdoc',
      scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'python function decorator @',
      scope: 'meta.function.decorator.python',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'python function support',
      scope:
        'support.token.decorator.python,meta.function.decorator.identifier.python',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'parameter function',
      scope: 'function.parameter',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'parameter function js/ts',
      scope: 'function.parameter',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'brace function',
      scope: 'function.brace',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'parameter function ruby cs',
      scope: 'function.parameter.ruby, function.parameter.cs',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'constant.language.symbol.ruby',
      scope: 'constant.language.symbol.ruby',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'rgb-value',
      scope: 'rgb-value',
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'rgb value',
      scope: 'inline-color-decoration rgb-value',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'rgb value less',
      scope: 'less rgb-value',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'sass selector',
      scope: 'selector.sass',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'js ts this',
      scope:
        'var.this,variable.language.this.js,variable.language.this.ts,variable.language.this.jsx,variable.language.this.tsx',
      settings: {
        foreground: '#e5c07b',
        fontStyle: 'italic'
      }
    },
    {
      name: 'ts primitive/builtin types',
      scope:
        'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'block scope',
      scope: 'block.scope.end,block.scope.begin',
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'cs storage type',
      scope: 'storage.type.cs',
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'cs local variable',
      scope: 'entity.name.variable.local.cs',
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#61afef'
      }
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: '#f44747'
      }
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'String interpolation',
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded'
      ],
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'Reset JavaScript string interpolation expression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: '#bbbbbb'
      }
    },
    {
      name: 'Import module JS',
      scope: ['keyword.operator.module'],
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'js Flowtype',
      scope: ['support.type.type.flowtype'],
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'js Flow',
      scope: ['support.type.primitive'],
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'js class prop',
      scope: ['meta.property.object'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'js func parameter',
      scope: ['variable.parameter.function.js'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'js template literals begin',
      scope: ['keyword.other.template.begin'],
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'js template literals end',
      scope: ['keyword.other.template.end'],
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'js template literals variable braces begin',
      scope: ['keyword.other.substitution.begin'],
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'js template literals variable braces end',
      scope: ['keyword.other.substitution.end'],
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'js operator.assignment',
      scope: ['keyword.operator.assignment'],
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'go operator',
      scope: ['keyword.operator.assignment.go', 'keyword.operator.address.go'],
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Go package name',
      scope: ['entity.name.package.go'],
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'elm prelude',
      scope: ['support.type.prelude.elm'],
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'elm constant',
      scope: ['support.constant.elm'],
      settings: {
        foreground: '#d19a66'
      }
    },
    {
      name: 'template literal',
      scope: ['punctuation.quasi.element'],
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'html/pug (jade) escaped characters and entities',
      scope: ['constant.character.entity'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name:
        'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
      scope: [
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.pseudo-class'
      ],
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'Clojure globals',
      scope: ['entity.global.clojure'],
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Clojure symbols',
      scope: ['meta.symbol.clojure'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Clojure constants',
      scope: ['constant.keyword.clojure'],
      settings: {
        foreground: '#56b6c2'
      }
    },
    {
      name: 'CoffeeScript Function Argument',
      scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Ini Default Text',
      scope: ['source.ini'],
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'Makefile prerequisities',
      scope: ['meta.scope.prerequisites.makefile'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Makefile text colour',
      scope: ['source.makefile'],
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Groovy import names',
      scope: ['storage.modifier.import.groovy'],
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'Groovy Methods',
      scope: ['meta.method.groovy'],
      settings: {
        foreground: '#61afef'
      }
    },
    {
      name: 'Groovy Variables',
      scope: ['meta.definition.variable.name.groovy'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'Groovy Inheritance',
      scope: ['meta.definition.class.inherited.classes.groovy'],
      settings: {
        foreground: '#98c379'
      }
    },
    {
      name: 'HLSL Semantic',
      scope: ['support.variable.semantic.hlsl'],
      settings: {
        foreground: '#e5c07b'
      }
    },
    {
      name: 'HLSL Types',
      scope: [
        'support.type.texture.hlsl',
        'support.type.sampler.hlsl',
        'support.type.object.hlsl',
        'support.type.object.rw.hlsl',
        'support.type.fx.hlsl',
        'support.type.object.hlsl'
      ],
      settings: {
        foreground: '#c678dd'
      }
    },
    {
      name: 'SQL Variables',
      scope: ['text.variable', 'text.bracketed'],
      settings: {
        foreground: '#e06c75'
      }
    },
    {
      name: 'types',
      scope: ['support.type.swift', 'support.type.vb.asp'],
      settings: {
        foreground: '#e5c07b'
      }
    }
  ]
}
