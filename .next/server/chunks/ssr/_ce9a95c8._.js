module.exports = [
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "YLIA - 주식회사 일리아 | B2B 서비스, 교육, 창업, 컨설팅",
    description: "혁신적인 B2B 서비스와 교육 솔루션으로 비즈니스의 미래를 만들어갑니다. 공급사 검색 서비스, 민간자격과정, 창업 지원, 개인정보 컨설팅을 제공합니다.",
    keywords: "YLIA, 일리아, B2B 서비스, 교육 서비스, 창업 서비스, 컨설팅 서비스, 공급사 검색, seepn.me",
    authors: [
        {
            name: "주식회사 일리아"
        }
    ],
    openGraph: {
        title: "YLIA - 주식회사 일리아",
        description: "혁신적인 B2B 서비스와 교육 솔루션으로 비즈니스의 미래를 만들어갑니다",
        type: "website"
    },
    icons: {
        icon: '/ylia_favicon.png',
        shortcut: '/ylia_favicon.png',
        apple: '/ylia_favicon.png'
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "ko",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    dangerouslySetInnerHTML: {
                        __html: `
              // devtools-indicator 완전 차단 - 최강 버전
              (function() {
                // 즉시 실행
                function removeDevTools() {
                  // 모든 가능한 선택자로 찾기
                  const selectors = [
                    '#devtools-indicator',
                    '[id*="devtools"]',
                    '[class*="devtools"]',
                    '[data-nextjs-dev-tools]',
                    '.nextjs-toast',
                    '[data-nextjs-toast]',
                    '[data-nextjs-toast="true"]'
                  ];
                  
                  let found = false;
                  selectors.forEach(selector => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(el => {
                      el.remove();
                      found = true;
                    });
                  });
                  
                  return found;
                }
                
                // 무한 반복으로 제거
                function infiniteRemove() {
                  removeDevTools();
                  requestAnimationFrame(infiniteRemove);
                }
                
                // 즉시 시작
                infiniteRemove();
                
                // DOM 변경 감지
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                      mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {
                          const element = node;
                          if (element.id === 'devtools-indicator' || 
                              element.className?.includes('devtools') ||
                              element.getAttribute('data-nextjs-dev-tools')) {
                            element.remove();
                          }
                        }
                      });
                    }
                  });
                });
                
                // observer 시작
                if (document.body) {
                  observer.observe(document.body, {
                    childList: true,
                    subtree: true
                  });
                } else {
                  document.addEventListener('DOMContentLoaded', () => {
                    observer.observe(document.body, {
                      childList: true,
                      subtree: true
                    });
                  });
                }
                
                // 추가로 주기적으로 체크
                setInterval(removeDevTools, 50);
              })();
            `
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "antialiased",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_ce9a95c8._.js.map