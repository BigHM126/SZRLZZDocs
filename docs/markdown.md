# 文档规范

“瑞联智造”产品文档采用`在线更新`同步发布为广大客户和伙伴提供最即时的文档帮助。
文档全面支持 Markdown 语法。Markdown 是一种「电子邮件」风格的「标记语言」，我们强烈推荐所有写作者学习和掌握该语言。
在此，我们总结 Markdown 的优点如下：

纯文本，所以兼容性极强，可以用所有文本编辑器打开。
让你专注于文字而不是排版。
格式转换方便，Markdown 的文本你可以轻松转换为 html、电子书等。
Markdown 的标记语法有极好的可读性。

文档规范遵守基本的 Markdown(简写：MD)语法，并使用 VuePress 工具进行了扩展，具体内容如下：

## 标题 Headers

```MD
# 标题一
## 标题二
### 标题三
#### 标题四
##### 标题五
###### 标题六
```

::: tip
`#`和`标题`之间保留一个字符的空格，这是最标准的 Markdown 写法
:::

文档内容中的所有的【标题】将会自动地作为当前文档的“目录”，如，本文本左侧目录。默认仅包含三个层级标题，所以同一份文档使用三层级以下标题将不会出现在目录中。

## 文字效果和横线等 Text

~~删除线~~ <s>删除线（开启识别 HTML 标签时）</s>

_斜体字_ _斜体字_

**粗体** **粗体**

**_粗斜体_** **_粗斜体_**

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同 HTML 的 abbr 标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别 HTML 标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

```md
~~删除线~~ <s>删除线（开启识别 HTML 标签时）</s>

_斜体字_ _斜体字_

**粗体** **粗体**

**_粗斜体_** **_粗斜体_**

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同 HTML 的 abbr 标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别 HTML 标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.
```

## 引用 Blockquotes

```md
> 引用 Blockquotes.<br />引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可。
```

> 引用文本 Blockquotes

引用的行内混合 Blockquotes

> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可。

## 链接与锚点 Links

[内部链接](/guide/) <br />
[外部链接](http://www.baidu.com/) <br />
[邮件链接](mailto:rlzz@szrlzz.com)<br />

### 内部链接

网站内部的链接，将会被转换成导航。举个栗子：

- [Home](/) <!-- 跳转到根部的 README.md --> <br/>
- [快速入门](/guide/) <!-- 跳转到 foo 文件夹的 index.html -->
- [书写规范](/markdown/#内部链接) <!-- 跳转到 foo/index.html 的特定标题位置 -->

```md
[Home](/) <!-- 跳转到根部的 README.md -->
[快速入门](/guide/) <!-- 跳转到 foo 文件夹的 index.html -->
[书写规范](/markdown/#内部链接) <!-- 跳转到 foo/index.html 的特定标题位置 -->
```

### 外部链接

外部的链接将会被自动地设置为 `target="_blank" rel="noopener noreferrer"`:

- [瑞联官网](http://www.szrlzz.com)
- [用友网络](https://www.yonyou.com)
- [科瑞技术](http://www.colibri.com.cn/)

## 图片 Images

图片

![图片名称](/logo.png)

图片加链接 (Image + Link)：

[![rlzz](/logo.png)](http://www.szrlzz.com '瑞联智造')

[![](https://www.mdeditor.com/images/logos/markdown.png)](https://www.mdeditor.com/images/logos/markdown.png 'markdown')

> 推荐以上 Markdown 在线编辑工具.

## 列表 Lists

### 无序列表（减号）Unordered Lists (-)

- 列表一
- 列表二
- 列表三

### 无序列表嵌套（加号和嵌套）Unordered Lists (+)

- 列表一
- 列表二
  - 列表二-1
  - 列表二-2
  - 列表二-3
- 列表三
  - 列表一
  - 列表二
  - 列表三

### 有序列表 Ordered Lists (-)

1. 第一行
2. 第二行
3. 第三行

### 有序列表 Ordered Lists (-)

1. 第一行
2. 第二行
3. 第三行

### 任务列表样式 task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
  1. [ ] GFM task list 3-1
  2. [ ] GFM task list 3-2
  3. [ ] GFM task list 3-3
- [ ] GFM task list 4
  1. [ ] GFM task list 4-1
  2. [ ] GFM task list 4-2

---

## 表格 Tables

| 项目   |   价格 | 数量 |
| ------ | -----: | :--: |
| 计算机 | \$1600 |  5   |
| 手机   |   \$12 |  12  |
| 管线   |    \$1 | 234  |

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

| Function name | Description                |
| ------------- | -------------------------- |
| `help()`      | Display the help window.   |
| `destroy()`   | **Destroy your computer!** |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |        \$1600 |
| col 2 is      |    centered     |          \$12 |
| zebra stripes |    are neat     |           \$1 |

| Item     |  Value |
| -------- | -----: |
| Computer | \$1600 |
| Phone    |   \$12 |
| Pipe     |    \$1 |

---

::: warning 表格对齐方式
-----:为右对齐；
:--:为两端对齐；
:-----为左对齐
:::

## 特殊符号 HTML Entities Codes

&copy; & &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;

X&sup2; Y&sup3; &frac34; &frac14; &times; &divide; &raquo;

18&ordm;C &quot; &apos;

## 目录 TOC

**输入**

```
[[toc]]
```

**输出**

<!--lint disable no-shortcut-reference-link no-undefined-references-->

[[toc]]

<!--lint enable no-shortcut-reference-link no-undefined-references-->

## 文档前序 Front Matter

VuePress 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用的支持:

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---

```

## 特定容器 Customer Container <Badge text="默认主题"/>

**输入**

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

**输出**

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger DANGER
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

你也可以自定义块中的标题：

````md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

```js
console.log('你好，VuePress！')
```

:::
````

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

```js
console.log('你好，VuePress！')
```

:::

**参考:**

- [vuepress-plugin-container](https://vuepress.github.io/plugins/container/)

## 代码块中的语法高亮 Coding Highlight

VuePress 使用了 [Prism](https://prismjs.com/) 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

**输入**

````
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

**输出**

```js
export default {
  name: 'MyComponent'
  // ...
}
```

**输入**

````
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

在 Prism 的网站上查看 [合法的语言列表](https://prismjs.com/#languages-list)。

## 代码块中的行高亮 Coding Highlight Inline

**输入**

````
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data() {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
