(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{cFhd:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("dEAq"),i=t("ZpkN");n["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"tabs-\u6807\u7b7e\u9875\u7ec4\u4ef6"},o.a.createElement(r["AnchorLink"],{to:"#tabs-\u6807\u7b7e\u9875\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:["icon","icon-link"]})),"Tabs \u6807\u7b7e\u9875\u7ec4\u4ef6"),o.a.createElement("p",null,"\u8be5\u7ec4\u4ef6\u4f9d\u8d56",o.a.createElement(r["Link"],{to:"https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs"},"@react-navigation/material-top-tabs")),o.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},o.a.createElement(r["AnchorLink"],{to:"#\u6548\u679c\u6f14\u793a","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:["icon","icon-link"]})),"\u6548\u679c\u6f14\u793a"),o.a.createElement("h3",{id:"1-\u9ed8\u8ba4\u6548\u679c"},o.a.createElement(r["AnchorLink"],{to:"#1-\u9ed8\u8ba4\u6548\u679c","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:["icon","icon-link"]})),"1. \u9ed8\u8ba4\u6548\u679c"),o.a.createElement(i["a"],{code:'<Tabs>\n  <Tabs.Screen\n    name="Home"\n    component={HomeScreen}\n    options={{\n      tabBarIcon: ({ color }) => {\n        return <Icon name="home" color={color} size={20} />;\n      },\n      tabBarLabel: () => {\n        return <Text>\u9996\u9875</Text>;\n      },\n    }}\n  />\n  <Tabs.Screen name="Settings" component={SettingsScreen} options={{ title: \'\u8bbe\u7f6e\' }} />\n  <Tabs.Screen name="Settings2" component={SettingsScreen} />\n</Tabs>\n',lang:"tsx"}),o.a.createElement("center",null,o.a.createElement("div",{style:{display:"flex",width:"750px"}},o.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),o.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),o.a.createElement("center",null,o.a.createElement("figure",null,o.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609053807429895308.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),o.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609053700827408426.gif",style:{width:"375px",border:"1px solid #ddd"}}))),o.a.createElement("h3",{id:"2-\u81ea\u5b9a\u4e49\u6548\u679c"},o.a.createElement(r["AnchorLink"],{to:"#2-\u81ea\u5b9a\u4e49\u6548\u679c","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:["icon","icon-link"]})),"2. \u81ea\u5b9a\u4e49\u6548\u679c"),o.a.createElement(i["a"],{code:"<Tabs\n  tabBarOptions={{\n    /** \u9009\u4e2d\u72b6\u6001\u7684\u989c\u8272 */\n    activeTintColor: 'green',\n    /** \u672a\u9009\u4e2d\u72b6\u6001\u7684\u989c\u8272 */\n    inactiveTintColor: 'red',\n    /** \u56fe\u6807\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    iconStyle: {},\n    /** \u6587\u672c\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    labelStyle: { color: '#000' },\n    /** \u5fbd\u6807\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    badgeStyle: { fontSize: 12 },\n    /** \u6574\u4e2atab\u9879\u4e3b\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    style: { borderWidth: 1, borderColor: 'red' },\n    /** tab\u9879\u7236\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    contentContainerStyle: { backgroundColor: 'grey' },\n    /** \u6eda\u52a8\u6307\u793a\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    indicatorStyle: { backgroundColor: 'gold' },\n    /** \u6eda\u52a8\u6307\u793a\u5668\u7684\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    indicatorContainerStyle: { backgroundColor: 'green' },\n    /** \u5355\u4e2atab\u9879\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f */\n    tabStyle: { backgroundColor: '#fff00f' },\n  }}\n>\n  <Tabs.Screen\n    name=\"Home\"\n    component={HomeScreen}\n    options={{\n      tabBarIcon: ({ color }) => {\n        return <Icon name=\"home\" color={color} size={20} />;\n      },\n      tabBarLabel: () => {\n        return <Text>\u9996\u9875</Text>;\n      },\n    }}\n  />\n  <Tabs.Screen name=\"Settings\" component={SettingsScreen} options={{ title: '\u8bbe\u7f6e' }} />\n  <Tabs.Screen name=\"Settings2\" component={SettingsScreen} />\n</Tabs>\n",lang:"tsx"}),o.a.createElement("center",null,o.a.createElement("div",{style:{display:"flex",width:"750px"}},o.a.createElement("div",{style:{width:"375px"}},"IOS\u6548\u679c\u56fe"),o.a.createElement("div",{style:{width:"375px"}},"Android\u6548\u679c\u56fe"))),o.a.createElement("center",null,o.a.createElement("figure",null,o.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609053919880083008.gif",style:{width:"375px",marginRight:"10px",border:"1px solid #ddd"}}),o.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1609054031039477317.gif",style:{width:"375px",border:"1px solid #ddd"}}))),o.a.createElement("h2",{id:"api"},o.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:["icon","icon-link"]})),"API"),o.a.createElement("h3",{id:"tabs-\u5c5e\u6027"},o.a.createElement(r["AnchorLink"],{to:"#tabs-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:["icon","icon-link"]})),"Tabs \u5c5e\u6027"),o.a.createElement("p",null,"\u7ee7\u627f\u81ea\uff1a",o.a.createElement("code",null,"@react-navigation/material-top-tabs"),"\u7684",o.a.createElement("code",null,"MaterialTopTabNavigationConfig"),"\u5c5e\u6027\u3002\u53c2\u8003\uff1a",o.a.createElement(r["Link"],{to:"https://reactnavigation.org/docs/material-top-tab-navigator"},"https://reactnavigation.org/docs/material-top-tab-navigator")),o.a.createElement(i["a"],{code:"export type TabsProps = Omit<MaterialTopTabNavigationConfig, 'tabBarOptions'> & {\n  tabBarOptions?: MaterialTopTabBarOptions & { showBadge?: boolean; badgeStyle?: StyleProp<TextStyle> };\n};\n",lang:"ts"})))}}}]);