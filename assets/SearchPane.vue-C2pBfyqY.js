const __vite__fileDeps=["assets/search-docs-data-D4RmLeET.js","assets/vendor-Cr-HhYtu.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { r as ref, k as watch, c as computed, d as defineComponent, o as openBlock, b as createElementBlock, a1 as renderSlot, n as normalizeClass, m as withKeys, q as createBlock, g as unref, I as Icon, e as createVNode, f as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, ae as toRefs, af as useRouter, w as withCtx, Y as markRaw, bu as useFocus, bv as refDebounced, y as withDirectives, a8 as vModelText, a7 as withModifiers, _ as __vitePreload, bw as flexsearch_bundleExports } from "./vendor-Cr-HhYtu.js";
import { u as useStoryStore } from "./story-Be5h71JN.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-Dt-HsXc4.js";
import "./GenericMountStory.vue2-BAnCldc1.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-DC5cK2dw.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-BxZQeT9y.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2114f510"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "ddaae392": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d75a2748"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1,"101":1,"102":1,"103":1,"104":1,"105":1,"106":1,"107":1,"108":1,"109":1,"110":1,"111":1,"112":1,"113":1,"114":1,"115":1,"116":1,"117":1,"118":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"s":[0,1,2,56,57,58,59,60,61,62,63,64,65,66,67],"sp":[0,1,2],"spo":[0,1,2],"spot":[0,1,2],"spotl":[0,1,2],"spotle":[0,1,2],"spotlek":[0,1,2],"spotlekt":[0,1,2],"p":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"po":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"pot":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"poto":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"potom":[3,4,5,6,7,8,9,10,14,15,16,17,18,19],"k":[11,12,13,20,21,22,23,24,25,30,31,32,33,73,74,75,76,77,78,79,80],"kr":[11,12,13],"kre":[11,12,13],"kret":[11,12,13],"ke":[20,21,22,23,24,25],"kek":[20,21,22,23,24,25],"kekp":[20,21,22,23,24,25],"kekpo":[20,21,22,23,24,25],"kekpos":[20,21,22,23,24,25],"o":[26,27],"os":[26,27],"ose":[26,27],"a":[28,29],"ao":[28,29],"aot":[28,29],"aoto":[28,29],"aotok":[28,29],"aotoko":[28,29],"aotokom":[28,29],"aotokomp":[28,29],"aotokompl":[28,29],"aotokomple":[28,29],"aotokomplet":[28,29],"aotokomplete":[28,29],"ka":[30,31,32,33,76,77,78,79,80],"kar":[30,31,32,33,76,77,78,79,80],"karo":[30,31,32,33],"karos":[30,31,32,33],"karose":[30,31,32,33],"karosel":[30,31,32,33],"t":[34,35,36,37,68,69,70,71,72,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"ta":[34,35,68,69,70,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"tat":[34,35],"tata":[34,35],"tatat":[34,35],"tatata":[34,35],"tatatap":[34,35],"tatatapl":[34,35],"tatataple":[34,35],"tr":[36,37,91,92,93,94,95,96,97],"tro":[36,37],"trop":[36,37],"trops":[36,37],"tropso":[36,37],"tropsom":[36,37],"tropsome":[36,37],"e":[38,39,40,41,42,43,44],"es":[38,39,40,41,42],"esp":[38,39,40,41,42],"espa":[38,39,40,41,42],"espam":[38,39,40,41,42],"espamt":[38,39,40,41,42],"espamta":[38,39,40,41,42],"espamtap":[38,39,40,41,42],"espamtapl":[38,39,40,41,42],"espamtaple":[38,39,40,41,42],"em":[43,44],"emf":[43,44],"emfe":[43,44],"emfem":[43,44],"emfeme":[43,44],"emfemet":[43,44],"emfemete":[43,44],"m":[45,46,47,48,49,50,51,52,53,81,82,98,99],"ma":[45,46,47,48,49,50,51],"mar":[45,46,47,48,49,50,51],"mark":[45,46,47,48,49,50,51],"marko":[45,46,47,48,49,50,51],"mo":[52,53,81,82,98,99],"mot":[52,53,98,99],"mota":[52,53],"motal":[52,53],"r":[54,55],"re":[54,55],"rep":[54,55],"repo":[54,55],"repom":[54,55],"sk":[56,57],"ske":[56,57],"skel":[56,57],"skele":[56,57],"skelet":[56,57],"skeleto":[56,57],"skeletom":[56,57],"sl":[58,59],"sle":[58,59],"slet":[58,59],"slete":[58,59],"sleter":[58,59],"st":[60,61],"ste":[60,61],"step":[60,61],"steps":[60,61],"sf":[62,63,64,65,66,67],"sfe":[62,63,64,65,66,67],"sfet":[62,63,64,65,66,67],"sfetk":[62,63,64,65,66,67],"tap":[68,69,70],"tf":[71,72],"tfe":[71,72],"tfet":[71,72],"kl":[73,74,75],"klo":[73,74,75],"klof":[73,74,75],"klofe":[73,74,75],"klofem":[73,74,75],"klofemk":[73,74,75],"kart":[76,77,78,79,80],"karts":[76,77,78,79,80],"mos":[81,82],"mose":[81,82],"te":[83,84,85,86,87,88,89,90],"tes":[83,84,85,86,87,88,89,90],"test":[83,84,85,86,87,88,89,90],"tra":[91,92,93,94,95,96,97],"trak":[91,92,93,94,95,96,97],"mote":[98,99],"motef":[98,99],"motefe":[98,99],"motefek":[98,99],"motefeka":[98,99],"motefekat":[98,99],"motefekate":[98,99],"motefekateo":[98,99],"motefekateom":[98,99],"f":[100],"fr":[100],"fra":[100],"frap":[100],"frape":[100],"fraper":[100],"l":[101],"la":[101],"las":[101],"lase":[101],"tal":[102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"talf":[102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"talfe":[102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"talfem":[102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],"talfemt":[102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"3":[77],"k":[0,1,2,5,6,7,9,43,44,64,66,84,89],"ka":[0,1,2],"kar":[0,1,2],"kart":[0,1,2],"pol":[4],"pols":[4],"polse":[4],"kr":[5,6,7,84],"kra":[5,6,84],"krat":[5,6,84],"krate":[5,6,84],"kratem":[5,6,84],"kratemt":[5,6,84],"kre":[7],"kret":[7],"t":[8,11,12,13,16,23,25,29,53,55,57,61,67,99],"to":[8],"tof":[8],"tofm":[8],"tofml":[8],"tofmlo":[8],"tofmloa":[8],"tofmloat":[8],"kl":[9],"klo":[9],"klof":[9],"r":[10,41,42,49,51,88],"ra":[10],"ram":[10],"ramp":[10],"rampo":[10],"rampof":[10],"tr":[11,12,13,113],"tra":[11,12,13],"trak":[11,12,13],"l":[15,32,65,80,91,92,93,111,112],"lo":[15],"loa":[15],"loat":[15],"loate":[15],"loatem":[15],"loatemk":[15],"te":[16,29,35,37,53,55,57,61,67,99,104],"tes":[16,67,104],"tesa":[16,67],"tesap":[16,67],"tesapl":[16,67],"tesaple":[16,67],"tesaplet":[16,67],"a":[17,26,27,85],"ar":[17],"are":[17],"area":[17],"m":[18,63,70,78,87,107],"mo":[18,47,48,50,63,78],"mor":[18,48,50,63],"morm":[18,48,50,63],"morma":[18,48,50,63],"mormal":[18,48,50,63],"o":[19,40,79],"ot":[19],"ote":[19],"oter":[19],"oters":[19],"p":[21,22,24,69,71,72,73,74,75,82,103,105,106,114,115],"pl":[21,82],"pla":[21],"plam":[21],"pa":[22,24,73,74,75,103,106],"pas":[22,24],"pase":[22,24],"ta":[23,25],"tap":[23,25],"tapl":[23,25],"taple":[23,25],"ak":[26,27],"akt":[26,27],"akte":[26,27],"aktef":[26,27],"aktefe":[26,27],"tef":[29,35,37,53,55,57,61,99],"tefa":[29,35,37,53,55,57,61,99],"tefao":[29,35,37,53,55,57,61,99],"tefaol":[29,35,37,53,55,57,61,99],"tefaolt":[29,35,37,53,55,57,61,99],"ko":[31,43,44,64,66],"kom":[31,43,44],"komo":[31],"komom":[31],"le":[32,80,91,92,93,111,112],"les":[32,91,92,93],"lest":[32,91,92,93],"kal":[33],"kale":[33],"kaler":[33],"kalere":[33],"f":[39,46,59,108,109,110,116,118],"fe":[39,46,116],"fer":[39],"fert":[39],"ferte":[39],"fertek":[39],"ferteka":[39],"fertekal":[39],"or":[40],"ore":[40],"ores":[40],"oreso":[40],"oresom":[40],"oresomt":[40],"oresomta":[40],"oresomtal":[40],"re":[41,42,49,51],"res":[41,42],"rese":[41,42],"reses":[41,42],"resesa":[41,42],"resesap":[41,42],"resesapl":[41,42],"resesaple":[41,42],"komt":[43,44],"komte":[43,44],"komtem":[43,44],"komtemt":[43,44],"fea":[46],"feat":[46],"feato":[46],"feator":[46],"featore":[46],"featores":[46],"ref":[49,51],"refe":[49,51],"refer":[49,51],"refers":[49,51],"referse":[49,51],"fr":[59],"fro":[59],"from":[59],"kos":[64,66],"kost":[64,66],"kosto":[64,66],"kostom":[64,66],"la":[65],"lap":[65],"lape":[65],"lapel":[65],"po":[69,71,72,105,114,115],"por":[69,105,114,115],"port":[69,105,114,115],"porte":[69,105,114,115],"porter":[69,105,114,115],"portere":[69],"porteret":[69],"ma":[70,87,107],"maf":[70],"mafe":[70],"mafek":[70],"mafeka":[70],"mafekat":[70],"mafekate":[70],"mafekateo":[70],"mafekateom":[70],"pos":[71,72],"pak":[73,74,75,103],"pakr":[73,74,75,103],"pakro":[73,74,75,103],"pakrom":[73,74,75,103],"pakromt":[73,74,75,103],"3t":[77],"mom":[78],"momp":[78],"mompe":[78],"momper":[78],"of":[79],"ofe":[79],"ofer":[79],"lem":[80,112],"leme":[80,112],"lemea":[80],"lemear":[80],"plo":[82],"plop":[82],"am":[85],"ame":[85],"amem":[85],"amema":[85],"amemat":[85],"amemate":[85],"amematet":[85],"s":[86,94,95,96,97],"sl":[86],"sle":[86],"slet":[86],"slete":[86],"mak":[87],"make":[87],"makek":[87],"ro":[88],"rot":[88],"rota":[88],"rotat":[88],"rotate":[88],"ke":[89],"ker":[89],"kerk":[89],"kerkl":[89],"kerkle":[89],"tep":[90],"tepe":[90],"tepef":[90],"tepefr":[90],"tepefre":[90],"tepefret":[90],"tepefrete":[90],"tepefreter":[90],"se":[94,95,96,97],"sem":[94,95,96,97],"semk":[94,95,96,97],"semkl":[94,95,96,97],"semkle":[94,95,96,97],"test":[104],"pat":[106],"pate":[106],"patem":[106],"patemk":[106],"mar":[107],"mark":[107],"marke":[107],"markem":[107],"fo":[108,109,110,118],"fom":[108,109,110],"fomt":[108,109,110],"let":[111],"lete":[111],"leter":[111],"tro":[113],"trop":[113],"fet":[116],"e":[117],"ek":[117],"ekt":[117],"fol":[118]},{"o":[1,44,78,80,86],"of":[1,78,80],"ofe":[1,80],"ofer":[1,80],"oferl":[1],"oferla":[1],"t":[2,7,17,42,74,75],"te":[2,17,42,72,74,92,96],"tem":[2,92,96],"tema":[2,96],"temam":[2,96],"temame":[2,96],"temamek":[2,96],"temameka":[2],"temamekal":[2],"temamekale":[2],"por":[5],"port":[5],"porte":[5],"porter":[5],"s":[6,15,23,25,108,111,113],"sa":[6,113],"sat":[6,113],"sato":[6,113],"satof":[6,113],"tr":[7],"tra":[7],"trak":[7],"e":[9,21,59,112],"ef":[9],"efe":[9],"efek":[9],"efekt":[9],"k":[10,47,85,103,104,105,118],"kr":[10,85],"kra":[10,85],"krat":[10,85],"krate":[10,85],"kratem":[10,85],"kratemt":[10,85],"l":[12,16],"le":[12],"lef":[12],"left":[12],"r":[13,50,97,114],"re":[13,97],"rek":[13],"rekt":[13],"sm":[15],"lk":[16],"tes":[17,42],"tesa":[17],"tesap":[17],"tesapl":[17],"tesaple":[17],"tesaplet":[17],"em":[21],"emp":[21],"empo":[21],"empot":[21],"se":[23,25,108],"sel":[23,25],"sele":[23,25],"selek":[23,25],"selekt":[23,25],"selekte":[23,25],"selekteo":[23,25],"selekteom":[23,25],"am":[26,27],"amk":[26,27],"amko":[26,27],"amkor":[26,27],"p":[41,79],"pa":[41],"pam":[41],"pame":[41],"pamel":[41],"test":[42],"om":[44],"omt":[44],"omte":[44],"omtet":[44],"omtetl":[44],"omtetle":[44],"omtetlet":[44],"ka":[47],"kap":[47],"rt":[50,51],"rtl":[50,51],"eo":[59],"eos":[59],"eos1":[59],"eos16":[59],"f":[64,65,115],"fe":[64,65,109,115],"fet":[64,65,115],"kol":[66,103,104,105],"kolo":[66,103,104,105],"kolor":[66,103,104,105],"taps":[69,70],"tef":[72],"tefa":[72],"tefao":[72],"tefaol":[72],"tefaolt":[72],"tet":[74],"tetl":[74],"ta":[75],"tar":[75],"tark":[75],"po":[79],"pop":[79],"popl":[79],"pople":[79],"op":[86],"temo":[92],"tre":[93],"trel":[93],"trelo":[93],"res":[97],"rest":[97],"restr":[97],"restre":[97],"restrek":[97],"restrekt":[97],"ko":[103,104,105,118],"ses":[108],"sese":[108],"fek":[109],"fekt":[109],"fa":[110],"fam":[110],"fame":[110],"famel":[110],"famele":[110],"sp":[111],"spa":[111],"spak":[111],"spake":[111],"spakem":[111],"spakemk":[111],"ek":[112],"ekt":[112],"ra":[114],"rat":[114],"rate":[114],"rateo":[114],"rateos":[114],"kom":[118],"komf":[118],"komfe":[118],"komfek":[118]},{"e":[1,95],"ek":[1],"ekl":[1],"ekle":[1],"eklek":[1],"eklekt":[1],"ko":[2,47],"kol":[2],"kolo":[2],"kolor":[2],"kolore":[2],"koloret":[2],"to":[12,13],"m":[24,25],"mo":[24,25],"mot":[24,25],"mote":[24,25],"moteo":[24,25],"moteom":[24,25],"t":[27],"te":[27],"tef":[27],"tefa":[27],"tefao":[27],"tefaol":[27],"tefaolt":[27],"kos":[47],"kost":[47],"kosto":[47],"kostom":[47],"so":[64],"sof":[64],"r":[65],"rt":[65],"rtl":[65],"se":[66],"ses":[66],"sese":[66],"l":[78],"le":[78],"lem":[78],"leme":[78],"lemes":[78],"k":[93],"kl":[93],"klo":[93],"klom":[93],"klome":[93],"em":[95],"ema":[95],"emak":[95],"emake":[95],"tro":[97],"trop":[97]},{"p":[2],"po":[2],"por":[2],"port":[2],"porte":[2],"porter":[2],"r":[12],"re":[12],"rek":[12],"rekt":[12],"l":[13,64,66],"le":[13],"lef":[13],"left":[13],"a":[47],"am":[47],"ame":[47],"amem":[47],"amema":[47],"amemat":[47],"amemate":[47],"amemateo":[47],"amemateom":[47],"la":[64,66],"lap":[64,66],"lape":[64,66],"lapel":[64,66],"o":[95],"om":[95],"e":[96],"em":[96],"ema":[96],"emak":[96],"emake":[96],"f":[97],"fa":[97],"fal":[97],"falo":[97]},{"fem":[64],"tro":[95],"trop":[95]},{"ke":[64],"kek":[64],"keke":[64],"keket":[64]},{"o":[64],"om":[64],"oml":[64],"omle":[64]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "components-features-spotlightcard-story-vue", "kind": "story" }, "1": { "id": "components-features-spotlightcard-story-vue:components-features-spotlightcard-story-vue-0", "kind": "variant" }, "2": { "id": "components-features-spotlightcard-story-vue:components-features-spotlightcard-story-vue-1", "kind": "variant" }, "3": { "id": "components-tailwind-button-story-vue", "kind": "story" }, "4": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-0", "kind": "variant" }, "5": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-1", "kind": "variant" }, "6": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-2", "kind": "variant" }, "7": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-3", "kind": "variant" }, "8": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-4", "kind": "variant" }, "9": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-5", "kind": "variant" }, "10": { "id": "components-tailwind-button-story-vue:components-tailwind-button-story-vue-6", "kind": "variant" }, "11": { "id": "components-tailwind-gridtrack-story-vue", "kind": "story" }, "12": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-0", "kind": "variant" }, "13": { "id": "components-tailwind-gridtrack-story-vue:components-tailwind-gridtrack-story-vue-1", "kind": "variant" }, "14": { "id": "components-base-button-button-story-vue", "kind": "story" }, "15": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-0", "kind": "variant" }, "16": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-1", "kind": "variant" }, "17": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-2", "kind": "variant" }, "18": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-3", "kind": "variant" }, "19": { "id": "components-base-button-button-story-vue:components-base-button-button-story-vue-4", "kind": "variant" }, "20": { "id": "components-base-checkbox-checkbox-story-vue", "kind": "story" }, "21": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-0", "kind": "variant" }, "22": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-1", "kind": "variant" }, "23": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-2", "kind": "variant" }, "24": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-3", "kind": "variant" }, "25": { "id": "components-base-checkbox-checkbox-story-vue:components-base-checkbox-checkbox-story-vue-4", "kind": "variant" }, "26": { "id": "components-compose-active-anchor-index-story-vue", "kind": "story" }, "27": { "id": "components-compose-active-anchor-index-story-vue:_default", "kind": "variant" }, "28": { "id": "components-custom-autocomplete-autocomplete-story-vue", "kind": "story" }, "29": { "id": "components-custom-autocomplete-autocomplete-story-vue:_default", "kind": "variant" }, "30": { "id": "components-custom-carousel-carousel-story-vue", "kind": "story" }, "31": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-0", "kind": "variant" }, "32": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-1", "kind": "variant" }, "33": { "id": "components-custom-carousel-carousel-story-vue:components-custom-carousel-carousel-story-vue-2", "kind": "variant" }, "34": { "id": "components-custom-datatable-datatable-story-vue", "kind": "story" }, "35": { "id": "components-custom-datatable-datatable-story-vue:_default", "kind": "variant" }, "36": { "id": "components-custom-dropzone-dropzone-story-vue", "kind": "story" }, "37": { "id": "components-custom-dropzone-dropzone-story-vue:_default", "kind": "variant" }, "38": { "id": "components-custom-expandable-expandable-story-vue", "kind": "story" }, "39": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-0", "kind": "variant" }, "40": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-1", "kind": "variant" }, "41": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-2", "kind": "variant" }, "42": { "id": "components-custom-expandable-expandable-story-vue:components-custom-expandable-expandable-story-vue-3", "kind": "variant" }, "43": { "id": "components-custom-infinite-content-infinitecontent-story-vue", "kind": "story" }, "44": { "id": "components-custom-infinite-content-infinitecontent-story-vue:components-custom-infinite-content-infinitecontent-story-vue-0", "kind": "variant" }, "45": { "id": "components-custom-marquee-marquee-story-vue", "kind": "story" }, "46": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-0", "kind": "variant" }, "47": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-1", "kind": "variant" }, "48": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-2", "kind": "variant" }, "49": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-3", "kind": "variant" }, "50": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-4", "kind": "variant" }, "51": { "id": "components-custom-marquee-marquee-story-vue:components-custom-marquee-marquee-story-vue-5", "kind": "variant" }, "52": { "id": "components-custom-modal-modal-story-vue", "kind": "story" }, "53": { "id": "components-custom-modal-modal-story-vue:_default", "kind": "variant" }, "54": { "id": "components-custom-ribbon-ribbon-story-vue", "kind": "story" }, "55": { "id": "components-custom-ribbon-ribbon-story-vue:_default", "kind": "variant" }, "56": { "id": "components-custom-skeleton-skeleton-story-vue", "kind": "story" }, "57": { "id": "components-custom-skeleton-skeleton-story-vue:_default", "kind": "variant" }, "58": { "id": "components-custom-slider-slider-story-vue", "kind": "story" }, "59": { "id": "components-custom-slider-slider-story-vue:components-custom-slider-slider-story-vue-0", "kind": "variant" }, "60": { "id": "components-custom-steps-steps-story-vue", "kind": "story" }, "61": { "id": "components-custom-steps-steps-story-vue:_default", "kind": "variant" }, "62": { "id": "components-custom-switch-switch-story-vue", "kind": "story" }, "63": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-0", "kind": "variant" }, "64": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-1", "kind": "variant" }, "65": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-2", "kind": "variant" }, "66": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-3", "kind": "variant" }, "67": { "id": "components-custom-switch-switch-story-vue:components-custom-switch-switch-story-vue-4", "kind": "variant" }, "68": { "id": "components-custom-tab-tab-story-vue", "kind": "story" }, "69": { "id": "components-custom-tab-tab-story-vue:components-custom-tab-tab-story-vue-0", "kind": "variant" }, "70": { "id": "components-custom-tab-tab-story-vue:components-custom-tab-tab-story-vue-1", "kind": "variant" }, "71": { "id": "components-custom-tweetbox-tweetbox-story-vue", "kind": "story" }, "72": { "id": "components-custom-tweetbox-tweetbox-story-vue:_default", "kind": "variant" }, "73": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue", "kind": "story" }, "74": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-0", "kind": "variant" }, "75": { "id": "components-tailwind-backgrounds-glowingbackground-story-vue:components-tailwind-backgrounds-glowingbackground-story-vue-1", "kind": "variant" }, "76": { "id": "components-tailwind-cards-card-story-vue", "kind": "story" }, "77": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-0", "kind": "variant" }, "78": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-1", "kind": "variant" }, "79": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-2", "kind": "variant" }, "80": { "id": "components-tailwind-cards-card-story-vue:components-tailwind-cards-card-story-vue-3", "kind": "variant" }, "81": { "id": "components-tailwind-mouse-mouse-story-vue", "kind": "story" }, "82": { "id": "components-tailwind-mouse-mouse-story-vue:components-tailwind-mouse-mouse-story-vue-0", "kind": "variant" }, "83": { "id": "components-tailwind-text-text-story-vue", "kind": "story" }, "84": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-0", "kind": "variant" }, "85": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-1", "kind": "variant" }, "86": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-2", "kind": "variant" }, "87": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-3", "kind": "variant" }, "88": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-4", "kind": "variant" }, "89": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-5", "kind": "variant" }, "90": { "id": "components-tailwind-text-text-story-vue:components-tailwind-text-text-story-vue-6", "kind": "variant" }, "91": { "id": "components-custom-drag-stories-listdrag-story-vue", "kind": "story" }, "92": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-0", "kind": "variant" }, "93": { "id": "components-custom-drag-stories-listdrag-story-vue:components-custom-drag-stories-listdrag-story-vue-1", "kind": "variant" }, "94": { "id": "components-custom-drag-stories-singledrag-story-vue", "kind": "story" }, "95": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-0", "kind": "variant" }, "96": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-1", "kind": "variant" }, "97": { "id": "components-custom-drag-stories-singledrag-story-vue:components-custom-drag-stories-singledrag-story-vue-2", "kind": "variant" }, "98": { "id": "components-custom-notification-stories-notification-story-vue", "kind": "story" }, "99": { "id": "components-custom-notification-stories-notification-story-vue:_default", "kind": "variant" }, "100": { "id": "components-wrapper-wrapper-story-js", "kind": "story" }, "101": { "id": "components-custom-lazy-lazy-story-js", "kind": "story" }, "102": { "id": "tailwind", "kind": "story" }, "103": { "id": "tailwind:background-color", "kind": "variant" }, "104": { "id": "tailwind:text-color", "kind": "variant" }, "105": { "id": "tailwind:border-color", "kind": "variant" }, "106": { "id": "tailwind:padding", "kind": "variant" }, "107": { "id": "tailwind:margin", "kind": "variant" }, "108": { "id": "tailwind:font-size", "kind": "variant" }, "109": { "id": "tailwind:font-weight", "kind": "variant" }, "110": { "id": "tailwind:font-family", "kind": "variant" }, "111": { "id": "tailwind:letter-spacing", "kind": "variant" }, "112": { "id": "tailwind:line-height", "kind": "variant" }, "113": { "id": "tailwind:drop-shadow", "kind": "variant" }, "114": { "id": "tailwind:border-radius", "kind": "variant" }, "115": { "id": "tailwind:border-width", "kind": "variant" }, "116": { "id": "tailwind:width", "kind": "variant" }, "117": { "id": "tailwind:height", "kind": "variant" }, "118": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-D4RmLeET.js"), true ? __vite__mapDeps([0,1]) : void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
