  var url = window.location.href;
var hwidValue = url.split("?hwid")[1];

function submit() {
      const puppeteer = require('./node_modules');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Điều hướng đến trang web cần làm mới
    await page.goto(hwidValue);

    const keyoutput = await page.evaluate(() => {
      const keyElement = document.getElementById('keyoutput');
      keyElement = key
if (document.title == "Just a moment...") {
  return;
}
async function codex() {
  let t;
  for (; !t; ) (t = localStorage.getItem("android-session")), await sleep(1e3);
  async function e() {
    let e = await (
      await fetch("https://api.codex.lol/v1/stage/stages", {
        method: "GET",
        headers: { "Android-Session": t },
      })
    ).json();
    if (e.success) return e.authenticated ? [] : e.stages;
    const key =  "Error: Failed to get stages"
  }
  async function a(e) {
    let a = await (
      await fetch("https://api.codex.lol/v1/stage/initiate", {
        method: "POST",
        headers: { "Android-Session": t, "Content-Type": "application/json" },
        body: JSON.stringify({ stageId: e }),
      })
    ).json();
    if (a.success) return a.token;
    const key =   "Error: Failed to initiate stage"
  }
  async function o(e, a) {
    let o = await (
      await fetch("https://api.codex.lol/v1/stage/validate", {
        method: "POST",
        headers: {
          "Android-Session": t,
          "Content-Type": "application/json",
          "Task-Referrer": a,
        },
        body: JSON.stringify({ token: e }),
      })
    ).json();
    if (o.success) return o.token;
    const key =  "Error: Failed to validate stage"
  }
  async function n(e) {
    if (
      (
        await (
          await fetch("https://api.codex.lol/v1/stage/authenticate", {
            method: "POST",
            headers: {
              "Android-Session": t,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tokens: e }),
          })
        ).json()
      ).success
    )
      return !0;
    const key =   "Error: Failed to authenticate"
  }
  function i(t) {
    let e = t.split(".")[1];
    return JSON.parse((e = base64decode(e)));
  }
  document?.getElementsByTagName("a")?.length &&
    document.getElementsByTagName("a")[0].innerHTML.includes("Get started") &&
    document.getElementsByTagName("a")[0].click();
  let s = await e(),
    c = 0;
  for (; localStorage.getItem(s[c]) && c < s.length; ) c++;
  if (c == s.length) return;
  let r = [];
  try {
    for (; c < s.length; ) {
      let l = s[c].uuid,
        p = await a(l);
      await sleep(6e3);
      let h = i(p),
        u,
        d = await o(
          p,
          (u = h.link.includes("loot-links")
            ? "https://loot-links.com/"
            : h.link.includes("loot-link")
            ? "https://loot-link.com/"
            : "https://linkvertise.com/")
        );
      r.push({ uuid: l, token: d }), c++;
    }
    n(r) && (await sleep(1e3), window.location.reload());
  } catch (m) {
    const key =   m;
  }
}
async function delta() {
  if ("Just a moment..." == document.title) return;
  let t = new URL(window.location.href).searchParams.get("id"),
    e = await (
      await fetch("https://api-gateway.platoboost.com/v1/authenticators/8/" + t)
    ).json();
  if (e.key) return;
  let a = new URL(window.location.href).searchParams.get("tk");
  if (a)
    await sleep(5e3),
      await (
        await fetch(
          `https://api-gateway.platoboost.com/v1/sessions/auth/8/${t}/${a}`,
          { method: "PUT" }
        )
      )
        .json()
        .then(async (t) => {
          window.location.assign(t.redirect);
        })
        .catch((t) => {
          const key =   t;
        });
  else {
    let o = e.captcha,
      n = await fetch(
        "https://api-gateway.platoboost.com/v1/sessions/auth/8/" + t,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            captcha: o ? await getTurnstileResponse() : "",
            type: o ? "Turnstile" : "",
          }),
        }
      );
    (n = await n.json()), await sleep(1e3);
    let i = await (
        await fetch(
          `https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(
            n.redirect
          )}`
        )
      ).text(),
      s = new URL(i).searchParams.get("r"),
      c = atob(s);
    window.location.assign(c);
  }
}
async function arceus() {
  if (window.location.href === "https://spdmteam.com/key-system-getkey" ) { 
    const key =   "You has been whitelist"
  }
  try {
    await fetch(
      `https://spdmteam.com/api/keysystem?hwid=${new URL(
        window.location.href
      ).searchParams.get("hwid")}&zone=Europe/Rome&advertiser=linkvertise`,
      { mode: "no-cors" }
    );
    let t = 1;
    for (; t <= 3; )
      await linkvertiseSpoof(
        `https://spdmteam.com/api/keysystem?step=${t}&advertiser=linkvertise`
      ),
        t++;
    window.location.assign("https://spdmteam.com/key-system-getkey");
  } catch (e) {
    const key =   e;
  }
}
async function hohohub() {
  try {
    var t;
    if (document.body.innerHTML.includes("Successfully Whitelisted!")) 
      var keyInput = document.getElementById('key-input');
      const key =   keyInput.value
    return;
    document.getElementById("subscribeModal")?.remove();
    let e = document.cookie
      .split("; ")
      .find((t) => t.includes("session"))
      .split("=")[1];
    await fetch("/api/captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        captchaToken: await getTurnstileResponse(),
        session: e,
      }),
    });
    let a = document.getElementsByTagName("button")[1].onclick.toString();
    (a = a.split(",")[1].split(")")[0].trim()),
      await fetch("/api/redirect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startToken: (
            await (
              await fetch("/api/start", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  site: 2,
                  cucmep: btoa((a = parseInt(a)) + 10 + 1e3 + 9 + 12 + 6),
                  session: e,
                }),
              })
            ).json()
          ).token,
          session: e,
        }),
      }),
      await ((t = `https://hohohubv-ac90f67762c4.herokuapp.com/api/step?step=${
        parseInt(
          document
            .getElementsByTagName("p")[0]
            .innerHTML.split("checkpoint ")[1]
            .split(" ")[0]
        ) + 1
      }`),
      new Promise((e, a) => {
        GM.xmlHttpRequest({
          method: "GET",
          url: t,
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            Referer: "https://loot-link.com/",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "cross-site",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
          },
          onload: function (t) {
            e(t);
          },
          onerror: function (t) {
            a(t);
          },
        });
      })),
      window.location.reload();
  } catch (o) {
   const key =   o;
  }
}
function sleep(t) {
  return new Promise((e) => setTimeout(e, t));
}
function linkvertiseSpoof(t) {
  return new Promise((e, a) => {
    GM.xmlHttpRequest({
      method: "GET",
      url: t,
      headers: { Referer: "https://linkvertise.com/" },
      onload: function (t) {
        e(t.responseText);
      },
      onerror: function (t) {
        a(t);
      },
    });
  });
}
async function getTurnstileResponse() {
  let t = "";
  for (;;) {
    try {
      if ((t = turnstile.getResponse())) break;
    } catch (e) {}
    await sleep(1);
  }
  return turnstile.getResponse();
}
function base64decode(t) {
  return atob((t = t.replace(/-/g, "+").replace(/_/g, "/")));
}
async function start() {
  switch (window.location.hostname) {
    case "gateway.platoboost.com":
      await delta();
      break;
    case "mobile.codex.lol":
      await codex();
      break;
    case "spdmteam.com":
      await arceus();
      break;
    case "hohohubv-ac90f67762c4.herokuapp.com":
      await hohohub();
      break;
  }
}
!(function () {
  "use strict";
  if (
    "adshnk.com" === window.location.hostname ||
    "adshrink.it" === window.location.hostname
  ) {
    let t = setInterval(() => {
      "object" == typeof _sharedData &&
      0 in _sharedData &&
      "destination" in _sharedData[0]
        ? (clearInterval(t),
          document.write(_sharedData[0].destination),
          window.location.replace(document.body.textContent))
        : "undefined" != typeof ___reactjsD &&
          "object" == typeof window[___reactjsD.o] &&
          "string" == typeof window[___reactjsD.o].dest &&
          (clearInterval(t),
          const key =   window[___reactjsD.o].dest);
    });
  } else if ("sub2unlock.com" === window.location.hostname) {
    let e = document.URL;
    if (e.includes("sub2unlock.com/link/unlock")) {
      let a = document.getElementById("link").getAttribute("href");
      window.location.replace(a);
    } else {
      let o = e.split("/"),
        n = o[o.length - 1];
      const key =   "https://sub2unlock.com/link/unlock/" + n;
    }
  } else if ("socialwolvez.com" === window.location.hostname)
    fetch(
      "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" +
        location.pathname.substr(7)
    )
      .then((t) => (t.ok || window.location.reload(), t.json()))
      .then((t) => {
        t && t.link && t.link.url
          ? const key =   t.link.url
          : window.location.reload();
      })
      .catch((t) => {
        const key =   t;
      });
  else if ("mboost.me" === window.location.hostname)
    try {
      let i = document.querySelector('script[id="__NEXT_DATA__"]');
      if (i) {
        let s = JSON.parse(i.textContent);
        s.props.pageProps.data.targeturl
          ? const key =   s.props.pageProps.data.targeturl
          : window.location.reload();
      } else window.location.reload();
    } catch (c) {
      const key =   c;
    }
  else if ("leasurepartment.xyz" === window.location.hostname) {
    async function r(t) {
      return JSON.parse(atob(t));
    }
    async function l() {
      let t = await r(
        (function t(e) {
          if (
            (e = RegExp("[?&]" + encodeURIComponent(e) + "=([^&]*)").exec(
              location.search
            ))
          )
            return decodeURIComponent(e[1]);
        })("cc")
      );
      t && t.link 
        ? const key =   t.link 
        : window.location.reload();
    }
    l();
  }
  let p = {
      "https://work.ink/46x/Check1": "btteam.top/checkpoint/checkpoint-2.php",
      "https://btteam.top/checkpoint/checkpoint-2.php": "work.ink/46x/Check2",
      "https://work.ink/46x/Check2": "btteam.top/checkpoint/redirect-2.php",
    },
    h = window.location.href;
  h in p && window.location.replace(`https://${p[h]}`),
    h.includes("btteam.top/checkpoint/checkpoint-1.php") &&
      setTimeout(() => {
        window.location.replace(
          "https://btteam.top/checkpoint/redirect-workink.php"
        );
      }, "3000");
      h.includes("https://btteam.top/checkpoint/getkey.php?h=")
       var keyvalue = document.getElementById("key").value;
       const key =  keyvalue
})(),
  start();
    });
    await browser.close();
})();
  document.write(`<pre style="word-wrap: break-word; white-space: pre-wrap;">{"key":"${keyoutput}"}</pre>`)
}

// https://discord.gg/uq8V2y7Y4k
submit()
