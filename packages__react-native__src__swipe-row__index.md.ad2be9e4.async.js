(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[101],{"VqF/":function(e,t,n){"use strict";n.r(t);var l=n("q1tI"),a=n.n(l),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");t["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"swiperow-\u6ed1\u52a8\u64cd\u4f5c"},a.a.createElement("a",{"aria-hidden":"true",href:"#swiperow-\u6ed1\u52a8\u64cd\u4f5c"},a.a.createElement("span",{className:"icon icon-link"})),"SwipeRow \u6ed1\u52a8\u64cd\u4f5c"),a.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u6548\u679c\u6f14\u793a"},a.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),a.a.createElement("h3",{id:"1-\u6ca1\u6709\u64cd\u4f5c\u9879"},a.a.createElement("a",{"aria-hidden":"true",href:"#1-\u6ca1\u6709\u64cd\u4f5c\u9879"},a.a.createElement("span",{className:"icon icon-link"})),"1. \u6ca1\u6709\u64cd\u4f5c\u9879"),a.a.createElement(c.a,{code:"<FlatList\n  data={[\n    { id: 1, name: 'zhangsan' },\n    { id: 2, name: 'lisi' },\n  ]}\n  keyExtractor={item => item.id.toString()}\n  renderItem={({ item }) => (\n    <SwipeRow>\n      <View style={styles.rowContent}>\n        <View style={styles.rowIcon} />\n        <View>\n          <Text style={styles.rowTitle}>{item.name}</Text>\n          <Text style={styles.rowSubtitle}>Drag the row left and right</Text>\n        </View>\n      </View>\n    </SwipeRow>\n  )}\n/>\n",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",width:"750px"}},a.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),a.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609988775816306743.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609988953851170750.gif",style:{width:"375px",border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"2-\u53ea\u6709\u5de6\u6ed1\u64cd\u4f5c\u9879"},a.a.createElement("a",{"aria-hidden":"true",href:"#2-\u53ea\u6709\u5de6\u6ed1\u64cd\u4f5c\u9879"},a.a.createElement("span",{className:"icon icon-link"})),"2. \u53ea\u6709\u5de6\u6ed1\u64cd\u4f5c\u9879"),a.a.createElement(c.a,{code:"<FlatList\n  data={[\n    { id: 1, name: 'zhangsan' },\n    { id: 2, name: 'lisi' },\n  ]}\n  keyExtractor={item => item.id.toString()}\n  renderItem={({ item }) => (\n    <SwipeRow\n      rightActions={[\n        {\n          label: '\u5220\u9664',\n          onPress: () => console.log('remove'),\n          backgroundColor: '#f8a024',\n        },\n        {\n          label: '\u8b66\u544a',\n          onPress: () => console.log('warn'),\n          backgroundColor: '#4f7db0',\n        },\n      ]}\n    >\n      <View style={styles.rowContent}>\n        <View style={styles.rowIcon} />\n        <View>\n          <Text style={styles.rowTitle}>{item.name}</Text>\n          <Text style={styles.rowSubtitle}>Drag the row left and right</Text>\n        </View>\n      </View>\n    </SwipeRow>\n  )}\n/>\n",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",width:"750px"}},a.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),a.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609989184598674279.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609989167744061868.gif",style:{width:"375px",border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"3-\u53ea\u6709\u53f3\u6ed1\u64cd\u4f5c\u9879"},a.a.createElement("a",{"aria-hidden":"true",href:"#3-\u53ea\u6709\u53f3\u6ed1\u64cd\u4f5c\u9879"},a.a.createElement("span",{className:"icon icon-link"})),"3. \u53ea\u6709\u53f3\u6ed1\u64cd\u4f5c\u9879"),a.a.createElement(c.a,{code:"<FlatList\n  data={[\n    { id: 1, name: 'zhangsan' },\n    { id: 2, name: 'lisi' },\n  ]}\n  keyExtractor={item => item.id.toString()}\n  renderItem={({ item }) => (\n    <SwipeRow\n      leftActions={[\n        {\n          label: '\u786e\u8ba4',\n          onPress: () => console.log('confirm'),\n          backgroundColor: '#2f9a5d',\n        },\n        {\n          label: 'OK',\n          onPress: () => console.log('ok'),\n          backgroundColor: 'gold',\n        },\n      ]}\n    >\n      <View style={styles.rowContent}>\n        <View style={styles.rowIcon} />\n        <View>\n          <Text style={styles.rowTitle}>{item.name}</Text>\n          <Text style={styles.rowSubtitle}>Drag the row left and right</Text>\n        </View>\n      </View>\n    </SwipeRow>\n  )}\n/>\n",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",width:"750px"}},a.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),a.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609989288490482019.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609989377500041298.gif",style:{width:"375px",border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"4-\u5de6\u6ed1\u548c\u53f3\u6ed1\u64cd\u4f5c\u9879"},a.a.createElement("a",{"aria-hidden":"true",href:"#4-\u5de6\u6ed1\u548c\u53f3\u6ed1\u64cd\u4f5c\u9879"},a.a.createElement("span",{className:"icon icon-link"})),"4. \u5de6\u6ed1\u548c\u53f3\u6ed1\u64cd\u4f5c\u9879"),a.a.createElement(c.a,{code:"<FlatList\n  data={[\n    { id: 1, name: 'zhangsan' },\n    { id: 2, name: 'lisi' },\n  ]}\n  keyExtractor={item => item.id.toString()}\n  renderItem={({ item }) => (\n    <SwipeRow\n      leftActions={[\n        {\n          label: '\u786e\u8ba4',\n          onPress: () => console.log('confirm'),\n          backgroundColor: '#2f9a5d',\n        },\n        {\n          label: 'OK',\n          onPress: () => console.log('ok'),\n          backgroundColor: 'gold',\n        },\n      ]}\n      rightActions={[\n        {\n          label: '\u5220\u9664',\n          onPress: () => console.log('remove'),\n          backgroundColor: '#f8a024',\n        },\n        {\n          label: '\u8b66\u544a',\n          onPress: () => console.log('warn'),\n          backgroundColor: '#4f7db0',\n        },\n      ]}\n    >\n      <View style={styles.rowContent}>\n        <View style={styles.rowIcon} />\n        <View>\n          <Text style={styles.rowTitle}>{item.name}</Text>\n          <Text style={styles.rowSubtitle}>Drag the row left and right</Text>\n        </View>\n      </View>\n    </SwipeRow>\n  )}\n/>\n",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",width:"750px"}},a.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),a.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609989603999765329.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609989561578881470.gif",style:{width:"375px",border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"5-\u81ea\u5b9a\u4e49\u884c\u9ad8"},a.a.createElement("a",{"aria-hidden":"true",href:"#5-\u81ea\u5b9a\u4e49\u884c\u9ad8"},a.a.createElement("span",{className:"icon icon-link"})),"5. \u81ea\u5b9a\u4e49\u884c\u9ad8"),a.a.createElement(c.a,{code:"<FlatList\n  data={[\n    { id: 1, name: 'zhangsan' },\n    { id: 2, name: 'lisi' },\n  ]}\n  keyExtractor={item => item.id.toString()}\n  renderItem={({ item }) => (\n    <SwipeRow\n      leftActions={[\n        {\n          label: '\u786e\u8ba4',\n          onPress: () => console.log('confirm'),\n          backgroundColor: '#2f9a5d',\n        },\n        {\n          label: 'OK',\n          onPress: () => console.log('ok'),\n          backgroundColor: 'gold',\n        },\n      ]}\n      rightActions={[\n        {\n          label: '\u5220\u9664',\n          onPress: () => console.log('remove'),\n          backgroundColor: '#f8a024',\n        },\n        {\n          label: '\u8b66\u544a',\n          onPress: () => console.log('warn'),\n          backgroundColor: '#4f7db0',\n        },\n      ]}\n      height={100}\n    >\n      <View style={styles.rowContent}>\n        <View style={styles.rowIcon} />\n        <View>\n          <Text style={styles.rowTitle}>{item.name}</Text>\n          <Text style={styles.rowSubtitle}>Drag the row left and right</Text>\n        </View>\n      </View>\n    </SwipeRow>\n  )}\n/>;\n\nconst styles = StyleSheet.create({\n  rowContent: {\n    flex: 1,\n    height: 100,\n    flexDirection: 'row',\n    alignItems: 'center',\n    borderBottomWidth: 1,\n    borderColor: '#eeeeee',\n  },\n  rowIcon: {\n    width: 40,\n    height: 40,\n    borderRadius: 20,\n    marginHorizontal: 10,\n    backgroundColor: '#73d4e3',\n  },\n  rowTitle: {\n    fontWeight: 'bold',\n    fontSize: 20,\n  },\n  rowSubtitle: {\n    fontSize: 18,\n    color: 'gray',\n  },\n});\n",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",width:"750px"}},a.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),a.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609989792298607673.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609989878322072213.gif",style:{width:"375px",border:"1px solid #ddd"}}))),a.a.createElement("h2",{id:"api"},a.a.createElement("a",{"aria-hidden":"true",href:"#api"},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("h3",{id:"swiperow"},a.a.createElement("a",{"aria-hidden":"true",href:"#swiperow"},a.a.createElement("span",{className:"icon icon-link"})),"SwipeRow"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u5fc5\u586b"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"actions"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u53f3\u4fa7\u6ed1\u51fa\u7684\u64cd\u4f5c\u9879"),a.a.createElement("td",null,a.a.createElement("code",null,"SwipeAction[]")),a.a.createElement("td",null,a.a.createElement("code",null,"[]"))),a.a.createElement("tr",null,a.a.createElement("td",null,"height"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u884c\u9ad8"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"60"))),a.a.createElement("tr",null,a.a.createElement("td",null,"actionWidth"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u6bcf\u4e2a\u64cd\u4f5c\u9879\u7684\u5bbd\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"height"))),a.a.createElement("tr",null,a.a.createElement("td",null,"onRemove"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u5220\u9664\u4e8b\u4ef6"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null)))),a.a.createElement("h3",{id:"swipeaction"},a.a.createElement("a",{"aria-hidden":"true",href:"#swipeaction"},a.a.createElement("span",{className:"icon icon-link"})),"SwipeAction"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u5fc5\u586b"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"label"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u64cd\u4f5c\u9879\u6587\u672c"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"textStyle"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u64cd\u4f5c\u9879\u6587\u672c\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"TextStyle")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"onPress"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u64cd\u4f5c\u9879\u70b9\u51fb\u4e8b\u4ef6"),a.a.createElement("td",null,a.a.createElement("code",null,"() => void")),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"backgroundColor"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u80cc\u666f\u8272"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null))))))}}}]);