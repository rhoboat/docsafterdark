/**
 * Hijacking Google Docs
 */

function Cmg(a, b, c, d, e) {
  a = zmg(
    a,
    b,
    !0,
    "Name before sharing",
    "Give your untitled document a name before it's shared:",
    d || new tmg(),
    e || new CG()
  );
  b = new aO();
  b.set(ud, "Skip", !1, !0);
  b.set(hl, ec, !0);
  XT(a, b);
  ZT(a, hl);
  c && $T(c, a);
  a.Ha(!0);
}

/**
 * Dynamically created elements, such as the word count modal below,
 * can be modified by overwriting its respective function definition
 */
function u8g(a) {
  var b = a.tsc,
    c = a.nTb,
    d = a.rsc,
    e = a.kTb,
    f = a.qsc,
    g = a.jTb,
    k = a.ssc,
    l = a.lTb;
  a = a.iuc;
  var n = !YS(f, 0);
  var p = Hve + T("kix-documentmetricsdialog-table") + Ute;
  l &&
    (p += v8g(
      qw(DP),
      k,
      l,
      n,
      rw(MFe + T(KYe) + " " + T(IYe) + '"'),
      rw(MFe + T(KYe) + " " + T(MYe) + '"')
    ));
  p += v8g(
    qw("Words"),
    b,
    c,
    n,
    rw(MFe + T(KYe) + " " + T(IYe) + '"'),
    rw(MFe + T(KYe) + " " + T(MYe) + '"')
  );
  p += v8g(
    qw("Characters"),
    f,
    g,
    n,
    rw(MFe + T(KYe) + " " + T(IYe) + '"'),
    rw(MFe + T(KYe) + " " + T(MYe) + '"')
  );
  p += v8g(
    qw("Characters excluding spaces"),
    d,
    e,
    n,
    rw(MFe + (a ? T(KYe) : T(JYe)) + " " + T(IYe) + '"'),
    rw(MFe + (a ? T(KYe) : T(JYe)) + " " + T(MYe) + '"')
  );
  p +=
    mve +
    (a
      ? m +
        T("kix-documentmetricsdialog-control") +
        " " +
        T(JYe) +
        " " +
        T(ui) +
        PO +
        T(a) +
        ea
      : "");
  return S(p);
}
