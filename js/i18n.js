/**
 * R-Type Tactics Guide — i18n System
 * Supports 8 languages with auto-detection, localStorage, and RTL.
 */
(function () {
  'use strict';

  const SUPPORTED = ['en', 'zh-Hans', 'es', 'ar', 'pt', 'ja', 'fr', 'de'];

  const LABELS = {
    en: 'English',
    'zh-Hans': '简体中文',
    es: 'Español',
    ar: 'العربية',
    pt: 'Português',
    ja: '日本語',
    fr: 'Français',
    de: 'Deutsch'
  };

  // ─── Translation strings ───────────────────────────────────────────

  const T = {

  // ── Shared: Header ──
  'nav.home': {
    en: 'Home',
    'zh-Hans': '首页', es: 'Inicio', ar: 'الرئيسية', pt: 'Início', ja: 'ホーム', fr: 'Accueil', de: 'Startseite'
  },
  'nav.beginner': {
    en: "Beginner's Guide",
    'zh-Hans': '新手入门', es: 'Guía Básica', ar: 'دليل المبتدئين', pt: 'Guia Iniciante', ja: '初心者ガイド', fr: 'Guide débutant', de: 'Einsteiger-Guide'
  },
  'nav.units': {
    en: 'Units',
    'zh-Hans': '兵种', es: 'Unidades', ar: 'الوحدات', pt: 'Unidades', ja: 'ユニット', fr: 'Unités', de: 'Einheiten'
  },
  'nav.walkthrough': {
    en: 'Walkthrough',
    'zh-Hans': '关卡攻略', es: 'Guía de Misiones', ar: 'دليل المهام', pt: 'Missões', ja: '攻略', fr: 'Soluce', de: 'Komplettlösung'
  },
  'nav.tips': {
    en: 'Tips',
    'zh-Hans': '技巧', es: 'Consejos', ar: 'نصائح', pt: 'Dicas', ja: 'コツ', fr: 'Astuces', de: 'Tipps'
  },
  'nav.compare': {
    en: 'Compare',
    'zh-Hans': '对比', es: 'Comparar', ar: 'مقارنة', pt: 'Comparar', ja: '比較', fr: 'Comparer', de: 'Vergleichen'
  },

  // ── Shared: Footer ──
  'footer.copyright': {
    en: 'R-Type Tactics I • II Cosmos is © Granzella Inc. / NIS America, Inc. This is a fan-made guide — not affiliated with the developers or publishers.',
    'zh-Hans': 'R-Type Tactics I • II Cosmos © Granzella Inc. / NIS America, Inc. 本站为玩家自制攻略，与开发商和发行商无关。',
    es: 'R-Type Tactics I • II Cosmos es © Granzella Inc. / NIS America, Inc. Guía hecha por fans — sin afiliación con los desarrolladores o editores.',
    ar: 'R-Type Tactics I • II Cosmos © Granzella Inc. / NIS America, Inc. هذا دليل من المعجبين — غير تابع للمطورين أو الناشرين.',
    pt: 'R-Type Tactics I • II Cosmos é © Granzella Inc. / NIS America, Inc. Guia feito por fãs — sem vínculo com os desenvolvedores ou editores.',
    ja: 'R-Type Tactics I • II Cosmos © Granzella Inc. / NIS America, Inc. 当サイトはファンメイドの攻略ガイドであり、開発元および販売元とは関係ありません。',
    fr: 'R-Type Tactics I • II Cosmos est © Granzella Inc. / NIS America, Inc. Guide créé par des fans — non affilié aux développeurs ou éditeurs.',
    de: 'R-Type Tactics I • II Cosmos ist © Granzella Inc. / NIS America, Inc. Dies ist ein Fan-Guide — nicht verbunden mit den Entwicklern oder Publishern.'
  },
  'footer.contact': {
    en: 'Contact', 'zh-Hans': '联系我们', es: 'Contacto', ar: 'اتصل بنا', pt: 'Contato', ja: 'お問い合わせ', fr: 'Contact', de: 'Kontakt'
  },
  'footer.privacy': {
    en: 'Privacy Policy', 'zh-Hans': '隐私政策', es: 'Privacidad', ar: 'سياسة الخصوصية', pt: 'Privacidade', ja: 'プライバシー', fr: 'Confidentialité', de: 'Datenschutz'
  },

  // ── Shared: Breadcrumbs ──
  'breadcrumb.home': {
    en: 'Home', 'zh-Hans': '首页', es: 'Inicio', ar: 'الرئيسية', pt: 'Início', ja: 'ホーム', fr: 'Accueil', de: 'Startseite'
  },
  'breadcrumb.beginner': {
    en: "Beginner's Guide", 'zh-Hans': '新手入门', es: 'Guía Básica', ar: 'دليل المبتدئين', pt: 'Guia Iniciante', ja: '初心者ガイド', fr: 'Guide débutant', de: 'Einsteiger-Guide'
  },
  'breadcrumb.units': {
    en: 'Units', 'zh-Hans': '兵种', es: 'Unidades', ar: 'الوحدات', pt: 'Unidades', ja: 'ユニット', fr: 'Unités', de: 'Einheiten'
  },
  'breadcrumb.walkthrough': {
    en: 'Walkthrough', 'zh-Hans': '关卡攻略', es: 'Guía', ar: 'دليل', pt: 'Missões', ja: '攻略', fr: 'Soluce', de: 'Lösung'
  },
  'breadcrumb.tips': {
    en: 'Tips & Tricks', 'zh-Hans': '技巧心得', es: 'Consejos', ar: 'نصائح', pt: 'Dicas', ja: 'コツ', fr: 'Astuces', de: 'Tipps'
  },

  // ── Index Page ──
  'index.hero.title': {
    en: 'R-Type Tactics <em>I • II Cosmos</em> Guide',
    'zh-Hans': 'R-Type Tactics <em>I • II Cosmos</em> 攻略指南',
    es: 'Guía de R-Type Tactics <em>I • II Cosmos</em>',
    ar: 'دليل R-Type Tactics <em>I • II Cosmos</em>',
    pt: 'Guia de R-Type Tactics <em>I • II Cosmos</em>',
    ja: 'R-Type Tactics <em>I • II Cosmos</em> 攻略ガイド',
    fr: 'Guide de R-Type Tactics <em>I • II Cosmos</em>',
    de: 'R-Type Tactics <em>I • II Cosmos</em> Guide'
  },
  'index.hero.subtitle': {
    en: 'The complete player-made guide covering beginner tips, unit stats, mission walkthroughs, and fleet-building advice for the ultimate turn-based sci-fi strategy collection.',
    'zh-Hans': '最全面的玩家自制攻略：新手技巧、兵种数据、关卡攻略、舰队搭配，助你征服这款终极回合制科幻策略合集。',
    es: 'La guía completa hecha por jugadores: consejos para principiantes, estadísticas de unidades, guías de misiones y consejos de flota para la colección definitiva de estrategia sci-fi por turnos.',
    ar: 'الدليل الكامل من اللاعبين: نصائح للمبتدئين، إحصائيات الوحدات، أدلة المهام، ونصائح بناء الأسطول لمجموعة استراتيجية الخيال العلمي القائمة على الأدوار.',
    pt: 'O guia completo feito por jogadores: dicas para iniciantes, estatísticas de unidades, guias de missões e conselhos de frota para a coleção definitiva de estratégia sci-fi por turnos.',
    ja: '初心者向けのヒント、ユニットデータ、ミッション攻略、艦隊編成のアドバイスを網羅した、究極のターン制SFストラテジーコレクションのための完全攻略ガイド。',
    fr: 'Le guide complet créé par les joueurs : astuces débutant, stats des unités, soluces de missions et conseils de flotte pour l\'ultime collection de stratégie SF au tour par tour.',
    de: 'Der vollständige Spieler-Guide: Einsteiger-Tipps, Einheiten-Statistiken, Missionslösungen und Flottenbau-Ratschläge für die ultimative rundenbasierte Sci-Fi-Strategie-Sammlung.'
  },
  'index.badge.release': {
    en: 'Releases Jun 18, 2026', 'zh-Hans': '2026年6月18日发售', es: 'Sale 18 Jun 2026', ar: 'يصدر 18 يونيو 2026', pt: 'Lançamento 18 Jun 2026', ja: '2026年6月18日発売', fr: 'Sort le 18 Juin 2026', de: 'Erscheint 18. Juni 2026'
  },
  'index.badge.genre': {
    en: 'Turn-Based Strategy', 'zh-Hans': '回合制策略', es: 'Estrategia por Turnos', ar: 'استراتيجية الأدوار', pt: 'Estratégia por Turnos', ja: 'ターン制ストラテジー', fr: 'Stratégie au tour par tour', de: 'Rundenstrategie'
  },
  'index.countdown.label': {
    en: 'Launch in', 'zh-Hans': '距离发售还有', es: 'Lanzamiento en', ar: 'إطلاق خلال', pt: 'Lançamento em', ja: '発売まで', fr: 'Sortie dans', de: 'Veröffentlichung in'
  },
  'index.countdown.out': {
    en: 'OUT NOW!', 'zh-Hans': '现已发售！', es: '¡YA DISPONIBLE!', ar: 'متوفر الآن!', pt: 'JÁ DISPONÍVEL!', ja: '発売中！', fr: 'DISPONIBLE !', de: 'JETZT VERFÜGBAR!'
  },
  'index.sec.getting': {
    en: 'Getting Started', 'zh-Hans': '入门指南', es: 'Primeros Pasos', ar: 'بدء اللعب', pt: 'Começando', ja: 'はじめに', fr: 'Pour débuter', de: 'Erste Schritte'
  },
  'index.card.beginner.title': {
    en: "Absolute Beginner's Guide",
    'zh-Hans': '绝对新手入门指南', es: 'Guía Absoluta para Principiantes', ar: 'الدليل المطلق للمبتدئين', pt: 'Guia Absoluto para Iniciantes', ja: '完全初心者ガイド', fr: 'Guide absolu du débutant', de: 'Absoluter Einsteiger-Guide'
  },
  'index.card.beginner.desc': {
    en: 'New to R-Type Tactics? Learn the basics: movement, combat phases, resource management, and your first fleet setup.',
    'zh-Hans': '第一次玩R-Type策略版？学习基础：移动、战斗阶段、资源管理和首发舰队配置。',
    es: '¿Nuevo en R-Type Tactics? Aprende lo básico: movimiento, fases de combate, gestión de recursos y tu primera flota.',
    ar: 'جديد في R-Type Tactics؟ تعلم الأساسيات: الحركة، مراحل القتال، إدارة الموارد، وإعداد أسطولك الأول.',
    pt: 'Novo em R-Type Tactics? Aprenda o básico: movimento, fases de combate, gerenciamento de recursos e sua primeira frota.',
    ja: 'R-Type Tacticsが初めて？移動、戦闘フェーズ、リソース管理、初めての艦隊編成の基本を学びましょう。',
    fr: 'Nouveau sur R-Type Tactics ? Apprenez les bases : déplacement, phases de combat, gestion des ressources et votre première flotte.',
    de: 'Neu bei R-Type Tactics? Lerne die Grundlagen: Bewegung, Kampfphasen, Ressourcenmanagement und dein erstes Flotten-Setup.'
  },
  'index.card.bestunits.title': {
    en: 'Best Units for Beginners',
    'zh-Hans': '新手最佳兵种推荐', es: 'Mejores Unidades para Principiantes', ar: 'أفضل الوحدات للمبتدئين', pt: 'Melhores Unidades para Iniciantes', ja: '初心者向けオススメユニット', fr: 'Meilleures unités pour débutants', de: 'Beste Einheiten für Anfänger'
  },
  'index.card.bestunits.desc': {
    en: 'Which ships and support units to prioritize when starting out. Avoid wasting resources on trap picks.',
    'zh-Hans': '优先培养哪些战舰和辅助单位？避免在新手陷阱上浪费资源。',
    es: 'Qué naves y unidades de apoyo priorizar al empezar. Evita malgastar recursos en trampas.',
    ar: 'أي السفن ووحدات الدعم يجب إعطاؤها الأولوية. تجنب إهدار الموارد على اختيارات فخّة.',
    pt: 'Quais naves e unidades de suporte priorizar ao começar. Evite desperdiçar recursos em armadilhas.',
    ja: '序盤で優先すべき艦船とサポートユニット。罠ユニットにリソースを無駄にしないために。',
    fr: 'Quels vaisseaux et unités de soutien prioriser au début. Évitez de gaspiller vos ressources.',
    de: 'Welche Schiffe und Unterstützungseinheiten du zuerst priorisieren solltest. Verschwende keine Ressourcen für Fallen.'
  },
  'index.card.controls.title': {
    en: 'Controls & UI Translation',
    'zh-Hans': '操作与界面翻译', es: 'Controles y Traducción de IU', ar: 'عناصر التحكم وترجمة الواجهة', pt: 'Controles e Tradução da Interface', ja: '操作＆UI翻訳', fr: 'Contrôles & Traduction de l\'UI', de: 'Steuerung & UI-Übersetzung'
  },
  'index.card.controls.desc': {
    en: 'Japanese-to-English menu translations and keybindings explained. Never get lost in a sub-menu again.',
    'zh-Hans': '日文菜单翻译和快捷键说明，再也不怕在子菜单中迷路。',
    es: 'Traducciones de menús japonés-inglés y atajos de teclado explicados. No te pierdas más en los submenús.',
    ar: 'ترجمات القوائم من اليابانية للإنجليزية واختصارات لوحة المفاتيح. لا تضيع في القوائم الفرعية مرة أخرى.',
    pt: 'Traduções de menus japonês-inglês e atalhos de teclado explicados. Nunca mais se perca em um sub-menu.',
    ja: '日本語メニューの英訳とキー配置の解説。サブメニューで迷子にならないために。',
    fr: 'Traductions des menus japonais-anglais et raccourcis expliqués. Ne vous perdez plus jamais dans un sous-menu.',
    de: 'Japanisch-Englische Menü-Übersetzungen und Tastenbelegung erklärt. Verirre dich nie wieder in einem Untermenü.'
  },
  'index.sec.units': {
    en: 'Unit Database', 'zh-Hans': '兵种数据库', es: 'Base de Datos de Unidades', ar: 'قاعدة بيانات الوحدات', pt: 'Banco de Dados de Unidades', ja: 'ユニットデータベース', fr: 'Base de données des unités', de: 'Einheiten-Datenbank'
  },
  'index.card.earth.title': {
    en: 'Earth Force Units',
    'zh-Hans': '地球军兵种', es: 'Unidades de la Tierra', ar: 'وحدات قوة الأرض', pt: 'Unidades da Terra', ja: '地球軍ユニット', fr: 'Unités Terriennes', de: 'Erdstreitkräfte'
  },
  'index.card.earth.desc': {
    en: 'All R-series fighters, support craft, and capital ships. Stats, costs, upgrade paths, and deployment tips.',
    'zh-Hans': '全R系列战机、辅助飞船和主力舰。属性、费用、升级路线和部署建议。',
    es: 'Todos los cazas serie R, naves de apoyo y naves capitales. Estadísticas, costes, mejoras y consejos.',
    ar: 'جميع مقاتلات السلسلة R، ومركبات الدعم، والسفن الرئيسية. الإحصائيات، التكاليف، مسارات الترقية.',
    pt: 'Todos os caças série R, naves de suporte e naves capitais. Estatísticas, custos, melhorias e dicas.',
    ja: '全Rシリーズ戦闘機、支援艇、主力艦。ステータス、コスト、アップグレード経路、配備のコツ。',
    fr: 'Tous les chasseurs série R, vaisseaux de soutien et vaisseaux capitaux. Stats, coûts, améliorations.',
    de: 'Alle R-Serien-Jäger, Unterstützungsschiffe und Großkampfschiffe. Werte, Kosten, Upgrades und Tipps.'
  },
  'index.card.bydo.title': {
    en: 'Bydo Empire Units',
    'zh-Hans': 'Bydo帝国兵种', es: 'Unidades del Imperio Bydo', ar: 'وحدات إمبراطورية Bydo', pt: 'Unidades do Império Bydo', ja: 'バイド帝国ユニット', fr: 'Unités de l\'Empire Bydo', de: 'Bydo-Imperium Einheiten'
  },
  'index.card.bydo.desc': {
    en: 'Play as the other side. Bydo organic-mechanical hybrids with unique abilities and asymmetrical playstyle.',
    'zh-Hans': '扮演另一方势力。Bydo有机-机械混合兵种，拥有独特能力和不对称玩法。',
    es: 'Juega como el otro bando. Híbridos orgánico-mecánicos Bydo con habilidades únicas y estilo asimétrico.',
    ar: 'العب كالجانب الآخر. هجائن Bydo العضوية-الميكانيكية بقدرات فريدة وأسلوب لعب غير متماثل.',
    pt: 'Jogue como o outro lado. Híbridos orgânico-mecânicos Bydo com habilidades únicas e estilo assimétrico.',
    ja: '敵側でプレイ。独自能力と非対称プレイスタイルを持つバイドの有機-機械ハイブリッドユニット。',
    fr: 'Jouez dans l\'autre camp. Hybrides organiques-mécaniques Bydo aux capacités uniques et au style asymétrique.',
    de: 'Spiele die andere Seite. Bydo organisch-mechanische Hybride mit einzigartigen Fähigkeiten und asymmetrischem Spielstil.'
  },
  'index.card.compare.title': {
    en: 'Unit Comparison Tool',
    'zh-Hans': '兵种对比工具', es: 'Comparador de Unidades', ar: 'أداة مقارنة الوحدات', pt: 'Comparador de Unidades', ja: 'ユニット比較ツール', fr: 'Comparateur d\'unités', de: 'Einheiten-Vergleich'
  },
  'index.card.compare.desc': {
    en: 'Filter, sort, and compare unit stats side-by-side. Find the best ship for any tactical situation.',
    'zh-Hans': '筛选、排序、并排对比兵种属性。为任何战术场景找到最佳战舰。',
    es: 'Filtra, ordena y compara estadísticas lado a lado. Encuentra la mejor nave para cada situación.',
    ar: 'تصفية وفرز ومقارنة إحصائيات الوحدات جنبًا إلى جنب. اعثر على أفضل سفينة لأي موقف تكتيكي.',
    pt: 'Filtre, ordene e compare estatísticas lado a lado. Encontre a melhor nave para qualquer situação.',
    ja: 'ユニットのステータスをフィルター、ソート、並べて比較。あらゆる戦術的状況に最適な艦船を見つけよう。',
    fr: 'Filtrez, triez et comparez les statistiques des unités. Trouvez le meilleur vaisseau pour chaque situation.',
    de: 'Filtern, sortieren und Einheitenwerte nebeneinander vergleichen. Finde das beste Schiff für jede taktische Lage.'
  },
  'index.sec.walkthrough': {
    en: 'Mission Walkthroughs', 'zh-Hans': '关卡攻略', es: 'Guías de Misión', ar: 'أدلة المهام', pt: 'Guias de Missão', ja: 'ミッション攻略', fr: 'Soluce des missions', de: 'Missions-Lösungen'
  },
  'index.card.rt1.title': {
    en: 'R-Type Tactics I — Full Walkthrough',
    'zh-Hans': 'R-Type Tactics I — 完整攻略', es: 'R-Type Tactics I — Guía Completa', ar: 'R-Type Tactics I — الدليل الكامل', pt: 'R-Type Tactics I — Guia Completo', ja: 'R-Type Tactics I — 完全攻略', fr: 'R-Type Tactics I — Soluce complète', de: 'R-Type Tactics I — Komplettlösung'
  },
  'index.card.rt1.desc': {
    en: 'Every mission covered: objectives, enemy composition, recommended fleet loadout, and S-rank tips.',
    'zh-Hans': '每关详解：任务目标、敌方阵容、推荐舰队配置和S评级技巧。',
    es: 'Todas las misiones: objetivos, composición enemiga, flota recomendada y consejos para rango S.',
    ar: 'كل مهمة مشروحة: الأهداف، تشكيلة العدو، الأسطول الموصى به، ونصائح الرتبة S.',
    pt: 'Todas as missões cobertas: objetivos, composição inimiga, frota recomendada e dicas para rank S.',
    ja: '全ミッション攻略：目標、敵編成、推奨艦隊、Sランクのコツ。',
    fr: 'Toutes les missions couvertes : objectifs, composition ennemie, flotte recommandée et astuces rang S.',
    de: 'Jede Mission abgedeckt: Ziele, Feindzusammensetzung, empfohlene Flotte und S-Rang-Tipps.'
  },
  'index.card.rt2.title': {
    en: 'R-Type Tactics II — Full Walkthrough',
    'zh-Hans': 'R-Type Tactics II — 完整攻略', es: 'R-Type Tactics II — Guía Completa', ar: 'R-Type Tactics II — الدليل الكامل', pt: 'R-Type Tactics II — Guia Completo', ja: 'R-Type Tactics II — 完全攻略', fr: 'R-Type Tactics II — Soluce complète', de: 'R-Type Tactics II — Komplettlösung'
  },
  'index.card.rt2.desc': {
    en: 'Operation Bitter Chocolate campaign guide. Branching paths, hidden missions, and secret unit unlocks.',
    'zh-Hans': 'Operation Bitter Chocolate战役攻略。分支路线、隐藏关卡和秘密兵种解锁。',
    es: 'Guía de la campaña Operation Bitter Chocolate. Rutas ramificadas, misiones ocultas y desbloqueo de unidades secretas.',
    ar: 'دليل حملة Operation Bitter Chocolate. مسارات متفرعة، مهام مخفية، وفتح وحدات سرية.',
    pt: 'Guia da campanha Operation Bitter Chocolate. Caminhos ramificados, missões ocultas e unidades secretas.',
    ja: 'Operation Bitter Chocolateキャンペーン攻略。分岐ルート、隠しミッション、秘密ユニットのアンロック。',
    fr: 'Guide de la campagne Operation Bitter Chocolate. Chemins ramifiés, missions cachées et unités secrètes.',
    de: 'Operation Bitter Chocolate Kampagnen-Guide. Verzweigte Pfade, versteckte Missionen und geheime Einheiten.'
  },
  'index.sec.advanced': {
    en: 'Advanced Tips', 'zh-Hans': '进阶技巧', es: 'Consejos Avanzados', ar: 'نصائح متقدمة', pt: 'Dicas Avançadas', ja: '上級テクニック', fr: 'Astuces avancées', de: 'Fortgeschrittene Tipps'
  },
  'index.card.fleet.title': {
    en: 'Fleet Composition 101',
    'zh-Hans': '舰队搭配入门', es: 'Composición de Flota 101', ar: 'تكوين الأسطول 101', pt: 'Composição de Frota 101', ja: '艦隊編成の基本', fr: 'Composition de flotte 101', de: 'Flottenzusammenstellung 101'
  },
  'index.card.fleet.desc': {
    en: 'How to balance fighters, bombers, and support. Fleet cost caps explained, and why synergy beats raw stats.',
    'zh-Hans': '如何平衡战斗机、轰炸机和辅助单位。舰队费用上限解析，以及为什么协同配合胜过纯数值。',
    es: 'Cómo equilibrar cazas, bombarderos y apoyo. Límites de coste explicados, y por qué la sinergia supera las estadísticas.',
    ar: 'كيفية موازنة المقاتلات والقاذفات والدعم. شرح حدود تكلفة الأسطول، ولماذا التآزر يتفوق على الإحصائيات.',
    pt: 'Como equilibrar caças, bombardeiros e suporte. Limites de custo explicados, e por que sinergia supera estatísticas.',
    ja: '戦闘機、爆撃機、サポートのバランスの取り方。艦隊コスト上限の解説と、シナジーが数値より重要な理由。',
    fr: 'Comment équilibrer chasseurs, bombardiers et soutien. Plafonds de coûts expliqués, et pourquoi la synergie bat les stats brutes.',
    de: 'Wie man Jäger, Bomber und Unterstützung ausbalanciert. Flottenkosten-Obergrenzen erklärt, und warum Synergie rohe Werte schlägt.'
  },
  'index.card.hidden.title': {
    en: 'Hidden Content & Unlockables',
    'zh-Hans': '隐藏内容与解锁', es: 'Contenido Oculto y Desbloqueables', ar: 'المحتوى المخفي وفتح القفل', pt: 'Conteúdo Oculto e Desbloqueáveis', ja: '隠し要素＆アンロック', fr: 'Contenu caché et déblocables', de: 'Versteckte Inhalte & Freischaltbares'
  },
  'index.card.hidden.desc': {
    en: 'Every secret unit, hidden mission, and unlock condition found so far. Spoilers clearly marked.',
    'zh-Hans': '迄今为止发现的所有秘密兵种、隐藏关卡和解锁条件。剧透内容已标注。',
    es: 'Cada unidad secreta, misión oculta y condición de desbloqueo encontrada. Spoilers claramente marcados.',
    ar: 'كل وحدة سرية ومهمة مخفية وشرط فتح تم العثور عليه. تم وضع علامة على الحرق.',
    pt: 'Cada unidade secreta, missão oculta e condição de desbloqueio encontrada. Spoilers claramente marcados.',
    ja: 'これまでに見つかったすべての秘密ユニット、隠しミッション、アンロック条件。ネタバレは明示。',
    fr: 'Chaque unité secrète, mission cachée et condition de déblocage trouvée. Spoilers clairement indiqués.',
    de: 'Jede gefundene geheime Einheit, versteckte Mission und Freischaltbedingung. Spoiler klar markiert.'
  },
  'index.card.cosmos.title': {
    en: "What's New in Cosmos",
    'zh-Hans': 'Cosmos版新内容', es: 'Novedades en Cosmos', ar: 'ما الجديد في Cosmos', pt: 'Novidades no Cosmos', ja: 'Cosmos版の新要素', fr: 'Nouveautés de Cosmos', de: 'Neu in Cosmos'
  },
  'index.card.cosmos.desc': {
    en: 'All changes from the original PSP releases: rebalanced units, new content, QoL improvements, and more.',
    'zh-Hans': '从PSP原版到Cosmos版的所有改动：兵种重平衡、新内容、体验优化等。',
    es: 'Todos los cambios desde los originales de PSP: unidades reequilibradas, nuevo contenido, mejoras de calidad de vida y más.',
    ar: 'جميع التغييرات من إصدارات PSP الأصلية: وحدات معاد توازنها، محتوى جديد، تحسينات جودة الحياة، والمزيد.',
    pt: 'Todas as mudanças dos originais de PSP: unidades reequilibradas, novo conteúdo, melhorias de qualidade de vida e mais.',
    ja: 'PSPオリジナル版からの全変更点：再調整されたユニット、新コンテンツ、QoL改善など。',
    fr: 'Tous les changements depuis les versions PSP originales : unités rééquilibrées, nouveau contenu, améliorations qualité de vie, etc.',
    de: 'Alle Änderungen gegenüber den PSP-Originalen: neu ausbalancierte Einheiten, neue Inhalte, QoL-Verbesserungen und mehr.'
  },

  // ── Sidebar ──
  'sidebar.search': {
    en: 'Search', 'zh-Hans': '搜索', es: 'Buscar', ar: 'بحث', pt: 'Buscar', ja: '検索', fr: 'Rechercher', de: 'Suche'
  },
  'sidebar.search.placeholder': {
    en: 'Unit name, mission…', 'zh-Hans': '兵种名、关卡…', es: 'Unidad, misión…', ar: 'اسم الوحدة، مهمة…', pt: 'Unidade, missão…', ja: 'ユニット名、ミッション…', fr: 'Unité, mission…', de: 'Einheit, Mission…'
  },
  'sidebar.quicklinks': {
    en: 'Quick Links', 'zh-Hans': '快捷链接', es: 'Enlaces Rápidos', ar: 'روابط سريعة', pt: 'Links Rápidos', ja: 'クイックリンク', fr: 'Liens rapides', de: 'Schnelllinks'
  },
  'sidebar.quick.beginner': {
    en: '→ Beginner\'s Guide', 'zh-Hans': '→ 新手入门指南', es: '→ Guía Básica', ar: '→ دليل المبتدئين', pt: '→ Guia Iniciante', ja: '→ 初心者ガイド', fr: '→ Guide débutant', de: '→ Einsteiger-Guide'
  },
  'sidebar.quick.units': {
    en: '→ All Units', 'zh-Hans': '→ 全部兵种', es: '→ Todas las Unidades', ar: '→ جميع الوحدات', pt: '→ Todas as Unidades', ja: '→ 全ユニット', fr: '→ Toutes les unités', de: '→ Alle Einheiten'
  },
  'sidebar.quick.walkthrough': {
    en: '→ Mission Index', 'zh-Hans': '→ 关卡索引', es: '→ Índice de Misiones', ar: '→ فهرس المهام', pt: '→ Índice de Missões', ja: '→ ミッション索引', fr: '→ Index des missions', de: '→ Missions-Index'
  },
  'sidebar.quick.tips': {
    en: '→ Tips & Tricks', 'zh-Hans': '→ 技巧心得', es: '→ Consejos', ar: '→ نصائح وحيل', pt: '→ Dicas e Truques', ja: '→ コツ＆テクニック', fr: '→ Astuces', de: '→ Tipps & Tricks'
  },
  'sidebar.quick.steam': {
    en: '→ Buy on Steam', 'zh-Hans': '→ Steam购买', es: '→ Comprar en Steam', ar: '→ اشترِ على Steam', pt: '→ Comprar na Steam', ja: '→ Steamで購入', fr: '→ Acheter sur Steam', de: '→ Auf Steam kaufen'
  },

  // ── Sidebar for Article Pages ──
  'sidebar.sections': {
    en: 'Article Sections', 'zh-Hans': '文章目录', es: 'Secciones', ar: 'أقسام المقال', pt: 'Seções', ja: '記事セクション', fr: 'Sections', de: 'Abschnitte'
  },
  'sidebar.related': {
    en: 'Related', 'zh-Hans': '相关内容', es: 'Relacionado', ar: 'ذات صلة', pt: 'Relacionado', ja: '関連記事', fr: 'Articles liés', de: 'Verwandtes'
  },

  // ── Tags ──
  'tag.mustread': {
    en: 'Must Read', 'zh-Hans': '必读', es: 'Imprescindible', ar: 'يجب قراءته', pt: 'Leitura Obrigatória', ja: '必読', fr: 'Incontournable', de: 'Pflichtlektüre'
  },
  'tag.popular': {
    en: 'Popular', 'zh-Hans': '热门', es: 'Popular', ar: 'شائع', pt: 'Popular', ja: '人気', fr: 'Populaire', de: 'Beliebt'
  },
  'tag.essentials': {
    en: 'Essentials', 'zh-Hans': '基础', es: 'Esencial', ar: 'أساسي', pt: 'Essencial', ja: '基本', fr: 'Essentiel', de: 'Grundlagen'
  },
  'tag.tool': {
    en: 'Tool', 'zh-Hans': '工具', es: 'Herramienta', ar: 'أداة', pt: 'Ferramenta', ja: 'ツール', fr: 'Outil', de: 'Werkzeug'
  },
  'tag.earth': {
    en: 'Earth', 'zh-Hans': '地球军', es: 'Tierra', ar: 'الأرض', pt: 'Terra', ja: '地球', fr: 'Terre', de: 'Erde'
  },
  'tag.bydo': {
    en: 'Bydo', 'zh-Hans': 'Bydo', es: 'Bydo', ar: 'Bydo', pt: 'Bydo', ja: 'バイド', fr: 'Bydo', de: 'Bydo'
  },

  // ── Beginner Guide Page ──
  'beginner.title': {
    en: "Absolute Beginner's Guide to R-Type Tactics",
    'zh-Hans': 'R-Type Tactics 绝对新手入门指南',
    es: 'Guía Absoluta para Principiantes de R-Type Tactics',
    ar: 'الدليل المطلق للمبتدئين في R-Type Tactics',
    pt: 'Guia Absoluto para Iniciantes de R-Type Tactics',
    ja: 'R-Type Tactics 完全初心者ガイド',
    fr: 'Guide absolu du débutant pour R-Type Tactics',
    de: 'Absoluter Einsteiger-Guide für R-Type Tactics'
  },
  'beginner.intro': {
    en: 'R-Type Tactics flips the classic shoot-\'em-up formula into a turn-based strategy game. You command a fleet of spacecraft on a hex grid, take turns moving and attacking, and can even jump into individual units for real-time shoot-\'em-up sequences. This guide gets you from zero to competent in one read.',
    'zh-Hans': 'R-Type Tactics将经典横版射击游戏转变为回合制策略游戏。你将在六边形网格上指挥一支太空舰队，交替移动和攻击，甚至可以进入单个单位进行实时射击。本指南让你从零基础到熟练，只需读一遍。',
    es: 'R-Type Tactics transforma la fórmula clásica de shoot-\'em-up en un juego de estrategia por turnos. Comandas una flota de naves en una cuadrícula hexagonal, te turnas para mover y atacar, e incluso puedes controlar unidades individuales en secuencias en tiempo real. Esta guía te lleva de cero a competente en una sola lectura.',
    ar: 'يحول R-Type Tactics لعبة إطلاق النار الكلاسيكية إلى لعبة استراتيجية قائمة على الأدوار. تقود أسطولًا من المركبات الفضائية على شبكة سداسية، وتتبادل الأدوار في الحركة والهجوم، ويمكنك حتى القفز إلى وحدات فردية لتجربة إطلاق نار في الوقت الحقيقي. هذا الدليل ينقلك من الصفر إلى الاحتراف.',
    pt: 'R-Type Tactics transforma o clássico shoot-\'em-up em um jogo de estratégia por turnos. Você comanda uma frota de naves em uma grade hexagonal, alterna movimentos e ataques, e pode até controlar unidades individuais em sequências em tempo real. Este guia te leva do zero ao competente em uma leitura.',
    ja: 'R-Type Tacticsは、古典的な横スクロールシューティングをターン制ストラテジーに変えた作品です。ヘックスグリッド上で宇宙艦隊を指揮し、ターン制で移動と攻撃を行い、リアルタイムのシューティングシーケンスで個別ユニットを操作することもできます。このガイドを読めば、ゼロから一人前まで到達できます。',
    fr: 'R-Type Tactics transforme la formule classique du shoot-\'em-up en un jeu de stratégie au tour par tour. Vous commandez une flotte de vaisseaux sur une grille hexagonale, vous déplacez et attaquez à tour de rôle, et pouvez même prendre le contrôle direct d\'unités individuelles dans des séquences en temps réel. Ce guide vous emmène de zéro à compétent en une seule lecture.',
    de: 'R-Type Tactics verwandelt die klassische Shoot-\'em-up-Formel in ein rundenbasiertes Strategiespiel. Du kommandierst eine Raumflotte auf einem Hex-Raster, bewegst und greifst abwechselnd an und kannst sogar einzelne Einheiten in Echtzeit-Shoot-\'em-up-Sequenzen steuern. Dieser Guide bringt dich in einer Lektüre von null auf kompetent.'
  },
  'beginner.toc': {
    en: 'Table of Contents', 'zh-Hans': '目录', es: 'Índice', ar: 'جدول المحتويات', pt: 'Índice', ja: '目次', fr: 'Table des matières', de: 'Inhaltsverzeichnis'
  },
  'beginner.sec.what': {
    en: 'What Is R-Type Tactics?', 'zh-Hans': '什么是R-Type Tactics？', es: '¿Qué es R-Type Tactics?', ar: 'ما هو R-Type Tactics؟', pt: 'O que é R-Type Tactics?', ja: 'R-Type Tacticsとは？', fr: 'Qu\'est-ce que R-Type Tactics ?', de: 'Was ist R-Type Tactics?'
  },
  'beginner.sec.modes': {
    en: 'Game Modes & What to Play First', 'zh-Hans': '游戏模式与首选推荐', es: 'Modos de Juego y Qué Jugar Primero', ar: 'أوضاع اللعبة وماذا تلعب أولاً', pt: 'Modos de Jogo e O Que Jogar Primeiro', ja: 'ゲームモードと最初に遊ぶべきもの', fr: 'Modes de jeu et par quoi commencer', de: 'Spielmodi & Was zuerst spielen'
  },
  'beginner.sec.controls': {
    en: 'Controls & UI Walkthrough', 'zh-Hans': '操作与界面详解', es: 'Controles e Interfaz', ar: 'عناصر التحكم وشرح الواجهة', pt: 'Controles e Interface', ja: '操作＆UI解説', fr: 'Contrôles et interface', de: 'Steuerung & UI-Erklärung'
  },
  'beginner.sec.fleet': {
    en: 'Building Your First Fleet', 'zh-Hans': '组建你的第一支舰队', es: 'Construyendo tu Primera Flota', ar: 'بناء أسطولك الأول', pt: 'Construindo sua Primeira Frota', ja: '初めての艦隊編成', fr: 'Construire votre première flotte', de: 'Deine erste Flotte bauen'
  },
  'beginner.sec.combat': {
    en: 'Combat Basics', 'zh-Hans': '战斗基础', es: 'Fundamentos de Combate', ar: 'أساسيات القتال', pt: 'Fundamentos de Combate', ja: '戦闘の基本', fr: 'Bases du combat', de: 'Kampf-Grundlagen'
  },
  'beginner.sec.resources': {
    en: 'Resource Management', 'zh-Hans': '资源管理', es: 'Gestión de Recursos', ar: 'إدارة الموارد', pt: 'Gerenciamento de Recursos', ja: 'リソース管理', fr: 'Gestion des ressources', de: 'Ressourcenmanagement'
  },
  'beginner.sec.force': {
    en: 'The Force System', 'zh-Hans': 'Force系统', es: 'El Sistema Force', ar: 'نظام Force', pt: 'O Sistema Force', ja: 'フォースシステム', fr: 'Le système Force', de: 'Das Force-System'
  },
  'beginner.sec.first5': {
    en: 'Your First 5 Missions', 'zh-Hans': '前5个关卡', es: 'Tus Primeras 5 Misiones', ar: 'أول 5 مهام لك', pt: 'Suas Primeiras 5 Missões', ja: '最初の5ミッション', fr: 'Vos 5 premières missions', de: 'Deine ersten 5 Missionen'
  },

  // ── Beginner Guide — Content (condensed for remaining sections) ──
  'beginner.what.p1': {
    en: 'R-Type Tactics is a <strong>turn-based strategy game</strong> set in the R-Type universe. You control a fleet of ships on a hex-based grid, issuing movement and attack commands each turn. Unlike traditional R-Type games where you pilot a single ship, here you manage an entire battlegroup.',
    'zh-Hans': 'R-Type Tactics是一款设定在R-Type宇宙中的<strong>回合制策略游戏</strong>。你在六边形网格上指挥一支舰队，每回合下达移动和攻击指令。与传统R-Type游戏中操控单艘飞船不同，这里你需要管理整个战斗群。',
    es: 'R-Type Tactics es un <strong>juego de estrategia por turnos</strong> ambientado en el universo R-Type. Controlas una flota de naves en una cuadrícula hexagonal, dando órdenes de movimiento y ataque cada turno. A diferencia de los R-Type tradicionales, aquí gestionas un grupo de batalla completo.',
    ar: 'R-Type Tactics هي <strong>لعبة استراتيجية قائمة على الأدوار</strong> تدور في عالم R-Type. تتحكم في أسطول من السفن على شبكة سداسية، وتصدر أوامر الحركة والهجوم في كل دور.',
    pt: 'R-Type Tactics é um <strong>jogo de estratégia por turnos</strong> ambientado no universo R-Type. Você controla uma frota de naves em uma grade hexagonal, dando comandos de movimento e ataque a cada turno.',
    ja: 'R-Type Tacticsは、R-Typeの世界観を舞台にした<strong>ターン制ストラテジーゲーム</strong>です。ヘックスグリッド上で艦隊を指揮し、毎ターン移動と攻撃の指示を出します。',
    fr: 'R-Type Tactics est un <strong>jeu de stratégie au tour par tour</strong> se déroulant dans l\'univers R-Type. Vous contrôlez une flotte de vaisseaux sur une grille hexagonale.',
    de: 'R-Type Tactics ist ein <strong>rundenbasiertes Strategiespiel</strong> im R-Type-Universum. Du steuerst eine Schiffsflotte auf einem Hex-Raster und gibst jede Runde Bewegungs- und Angriffsbefehle.'
  },
  'beginner.what.p2': {
    en: 'The collection includes two full games:',
    'zh-Hans': '合集包含两款完整游戏：', es: 'La colección incluye dos juegos completos:', ar: 'تتضمن المجموعة لعبتين كاملتين:', pt: 'A coleção inclui dois jogos completos:', ja: 'このコレクションには2つの完全なゲームが含まれています：', fr: 'La collection comprend deux jeux complets :', de: 'Die Sammlung enthält zwei vollständige Spiele:'
  },
  'beginner.pilot.tip': {
    en: 'You can "zoom in" to control individual units in a side-scrolling shoot-\'em-up mode during certain phases. This isn\'t just a gimmick — piloting skill can turn a losing battle around.',
    'zh-Hans': '你可以在特定阶段"放大"操控单个单位，进入横版射击模式。这不仅是噱头——驾驶技巧可以扭转战局。',
    es: 'Puedes "acercarte" para controlar unidades individuales en modo shoot-\'em-up lateral durante ciertas fases. No es solo un truco — tu habilidad de piloto puede cambiar una batalla perdida.',
    ar: 'يمكنك "التكبير" للتحكم في وحدات فردية في وضع إطلاق النار الجانبي خلال مراحل معينة. هذه ليست مجرد خدعة — مهارة القيادة يمكنها قلب معركة خاسرة.',
    pt: 'Você pode "dar zoom" para controlar unidades individuais em modo shoot-\'em-up lateral durante certas fases. Não é apenas um truque — sua habilidade de piloto pode virar uma batalha perdida.',
    ja: '特定のフェーズでは、ユニットに「ズームイン」して横スクロールシューティングモードで操作できます。これは単なるギミックではなく、操縦スキルが敗勢を覆すこともあります。',
    fr: 'Vous pouvez "zoomer" pour contrôler des unités individuelles en mode shoot-\'em-up latéral durant certaines phases. Ce n\'est pas un gadget — votre talent de pilote peut renverser une bataille perdue.',
    de: 'Du kannst "hineinzoomen", um einzelne Einheiten in einem Side-Scrolling-Shoot-\'em-up-Modus zu steuern. Das ist nicht nur eine Spielerei — Pilotenkönnen kann eine verlorene Schlacht wenden.'
  },
  'beginner.bydo.warn': {
    en: 'Bydo units play fundamentally differently — organic, self-repairing, asymmetrical. It\'s a fantastic experience but you\'ll be confused if you don\'t know the Earth side first.',
    'zh-Hans': 'Bydo兵种的玩法根本不同——有机体、自我修复、不对称。体验很棒，但如果不先了解地球军的玩法会非常困惑。',
    es: 'Las unidades Bydo funcionan de manera fundamentalmente diferente — orgánicas, autoreparables, asimétricas. Es una experiencia fantástica pero te confundirás si no conoces el bando de la Tierra primero.',
    ar: 'وحدات Bydo تعمل بشكل مختلف جوهريًا — عضوية، ذاتية الإصلاح، غير متماثلة. إنها تجربة رائعة لكنك ستحتار إذا لم تعرف جانب الأرض أولاً.',
    pt: 'Unidades Bydo funcionam de forma fundamentalmente diferente — orgânicas, auto-reparáveis, assimétricas. É uma experiência fantástica, mas você ficará confuso se não conhecer o lado da Terra primeiro.',
    ja: 'バイドユニットは根本的に異なる仕組みです — 有機的、自己修復、非対称。素晴らしい体験ですが、先に地球側を知らないと混乱します。',
    fr: 'Les unités Bydo fonctionnent de manière fondamentalement différente — organiques, auto-réparatrices, asymétriques. Une expérience fantastique mais vous serez perdu sans connaître le camp terrien d\'abord.',
    de: 'Bydo-Einheiten funktionieren grundlegend anders — organisch, selbstreparierend, asymmetrisch. Eine fantastische Erfahrung, aber du wirst verwirrt sein, wenn du die Erdseite nicht zuerst kennst.'
  },

  // ── Units Page ──
  'units.title': {
    en: 'Unit Database', 'zh-Hans': '兵种数据库', es: 'Base de Datos de Unidades', ar: 'قاعدة بيانات الوحدات', pt: 'Banco de Dados de Unidades', ja: 'ユニットデータベース', fr: 'Base de données des unités', de: 'Einheiten-Datenbank'
  },
  'units.lead': {
    en: 'Every playable unit in R-Type Tactics I & II Cosmos. Filter by faction, type, or tier. Click a unit name for detailed stats and tactical advice.',
    'zh-Hans': 'R-Type Tactics I & II Cosmos中所有可玩兵种。按阵营、类型或等级筛选。点击兵种名称查看详细属性和战术建议。',
    es: 'Todas las unidades jugables en R-Type Tactics I & II Cosmos. Filtra por facción, tipo o nivel. Haz clic en el nombre para ver estadísticas detalladas y consejos tácticos.',
    ar: 'جميع الوحدات القابلة للعب في R-Type Tactics I & II Cosmos. تصفية حسب الفصيل أو النوع أو المستوى. انقر على اسم الوحدة للإحصائيات التفصيلية والنصائح التكتيكية.',
    pt: 'Todas as unidades jogáveis em R-Type Tactics I & II Cosmos. Filtre por facção, tipo ou nível. Clique no nome para estatísticas detalhadas e conselhos táticos.',
    ja: 'R-Type Tactics I & II Cosmosのすべてのプレイアブルユニット。陣営、タイプ、ティアでフィルター。ユニット名をクリックすると詳細ステータスと戦術アドバイスを表示。',
    fr: 'Toutes les unités jouables de R-Type Tactics I & II Cosmos. Filtrez par faction, type ou niveau. Cliquez sur un nom pour des stats détaillées et des conseils tactiques.',
    de: 'Alle spielbaren Einheiten in R-Type Tactics I & II Cosmos. Filtern nach Fraktion, Typ oder Stufe. Klicke auf einen Namen für detaillierte Werte und taktische Hinweise.'
  },
  'units.filter.search': {
    en: 'Search by name…', 'zh-Hans': '按名称搜索…', es: 'Buscar por nombre…', ar: 'البحث بالاسم…', pt: 'Buscar por nome…', ja: '名前で検索…', fr: 'Rechercher par nom…', de: 'Nach Name suchen…'
  },
  'units.filter.faction': {
    en: 'All Factions', 'zh-Hans': '全部阵营', es: 'Todas las Facciones', ar: 'كل الفصائل', pt: 'Todas as Facções', ja: '全陣営', fr: 'Toutes les factions', de: 'Alle Fraktionen'
  },
  'units.filter.type': {
    en: 'All Types', 'zh-Hans': '全部类型', es: 'Todos los Tipos', ar: 'كل الأنواع', pt: 'Todos os Tipos', ja: '全タイプ', fr: 'Tous les types', de: 'Alle Typen'
  },
  'units.filter.tier': {
    en: 'All Tiers', 'zh-Hans': '全部等级', es: 'Todos los Niveles', ar: 'كل المستويات', pt: 'Todos os Níveis', ja: '全ティア', fr: 'Tous les niveaux', de: 'Alle Stufen'
  },
  'units.tab.all': {
    en: 'All Units', 'zh-Hans': '全部兵种', es: 'Todas', ar: 'الكل', pt: 'Todas', ja: '全ユニット', fr: 'Toutes', de: 'Alle'
  },
  'units.tab.earth': {
    en: 'Earth Force', 'zh-Hans': '地球军', es: 'Fuerza Terrestre', ar: 'قوة الأرض', pt: 'Força Terrestre', ja: '地球軍', fr: 'Force Terrienne', de: 'Erdstreitkräfte'
  },
  'units.tab.bydo': {
    en: 'Bydo Empire', 'zh-Hans': 'Bydo帝国', es: 'Imperio Bydo', ar: 'إمبراطورية Bydo', pt: 'Império Bydo', ja: 'バイド帝国', fr: 'Empire Bydo', de: 'Bydo-Imperium'
  },
  'units.table.name': { en: 'Name', 'zh-Hans': '名称', es: 'Nombre', ar: 'الاسم', pt: 'Nome', ja: '名前', fr: 'Nom', de: 'Name' },
  'units.table.faction': { en: 'Faction', 'zh-Hans': '阵营', es: 'Facción', ar: 'الفصيل', pt: 'Facção', ja: '陣営', fr: 'Faction', de: 'Fraktion' },
  'units.table.type': { en: 'Type', 'zh-Hans': '类型', es: 'Tipo', ar: 'النوع', pt: 'Tipo', ja: 'タイプ', fr: 'Type', de: 'Typ' },
  'units.table.hp': { en: 'HP', 'zh-Hans': '生命', es: 'PV', ar: 'الصحة', pt: 'PV', ja: 'HP', fr: 'PV', de: 'LP' },
  'units.table.en': { en: 'EN', 'zh-Hans': '能量', es: 'EN', ar: 'الطاقة', pt: 'EN', ja: 'EN', fr: 'EN', de: 'EN' },
  'units.table.atk': { en: 'ATK', 'zh-Hans': '攻击', es: 'ATQ', ar: 'هجوم', pt: 'ATQ', ja: 'ATK', fr: 'ATQ', de: 'ANG' },
  'units.table.def': { en: 'DEF', 'zh-Hans': '防御', es: 'DEF', ar: 'دفاع', pt: 'DEF', ja: 'DEF', fr: 'DEF', de: 'DEF' },
  'units.table.mob': { en: 'MOB', 'zh-Hans': '机动', es: 'MOV', ar: 'حركة', pt: 'MOB', ja: 'MOB', fr: 'MOB', de: 'BEW' },
  'units.table.cost': { en: 'Cost', 'zh-Hans': '费用', es: 'Coste', ar: 'التكلفة', pt: 'Custo', ja: 'コスト', fr: 'Coût', de: 'Kosten' },
  'units.table.tier': { en: 'Tier', 'zh-Hans': '等级', es: 'Nivel', ar: 'المستوى', pt: 'Nível', ja: 'ティア', fr: 'Rang', de: 'Stufe' },
  'units.noresults': {
    en: 'No units match your filters.', 'zh-Hans': '没有匹配的兵种。', es: 'Ninguna unidad coincide.', ar: 'لا توجد وحدات مطابقة.', pt: 'Nenhuma unidade corresponde.', ja: '該当するユニットがありません。', fr: 'Aucune unité ne correspond.', de: 'Keine Einheiten gefunden.'
  },
  'units.faction.earth': { en: 'Earth', 'zh-Hans': '地球军', es: 'Tierra', ar: 'الأرض', pt: 'Terra', ja: '地球', fr: 'Terre', de: 'Erde' },
  'units.faction.bydo': { en: 'Bydo', 'zh-Hans': 'Bydo', es: 'Bydo', ar: 'Bydo', pt: 'Bydo', ja: 'バイド', fr: 'Bydo', de: 'Bydo' },
  'units.type.fighter': { en: 'Fighter', 'zh-Hans': '战斗机', es: 'Caza', ar: 'مقاتلة', pt: 'Caça', ja: '戦闘機', fr: 'Chasseur', de: 'Jäger' },
  'units.type.bomber': { en: 'Bomber', 'zh-Hans': '轰炸机', es: 'Bombardero', ar: 'قاذفة', pt: 'Bombardeiro', ja: '爆撃機', fr: 'Bombardier', de: 'Bomber' },
  'units.type.support': { en: 'Support', 'zh-Hans': '辅助', es: 'Apoyo', ar: 'دعم', pt: 'Suporte', ja: '支援', fr: 'Soutien', de: 'Unterstützung' },
  'units.type.capital': { en: 'Capital Ship', 'zh-Hans': '主力舰', es: 'Nave Capital', ar: 'سفينة رئيسية', pt: 'Nave Capital', ja: '主力艦', fr: 'Vaisseau capital', de: 'Großkampfschiff' },

  // ── Walkthrough Page ──
  'walkthrough.title': {
    en: 'Mission Walkthrough', 'zh-Hans': '关卡攻略', es: 'Guía de Misiones', ar: 'دليل المهام', pt: 'Guia de Missões', ja: 'ミッション攻略', fr: 'Soluce des missions', de: 'Missions-Lösungen'
  },
  'walkthrough.lead': {
    en: 'Complete mission-by-mission guides for both campaigns. Each guide includes objectives, enemy intel, recommended fleet loadout, and tips for earning S-rank.',
    'zh-Hans': '两个战役的完整逐关攻略。每关包含任务目标、敌军情报、推荐舰队配置和S评级技巧。',
    es: 'Guías completas misión por misión para ambas campañas. Cada guía incluye objetivos, inteligencia enemiga, flota recomendada y consejos para rango S.',
    ar: 'أدلة كاملة لكل مهمة في الحملتين. يتضمن كل دليل الأهداف، معلومات العدو، الأسطول الموصى به، ونصائح للحصول على الرتبة S.',
    pt: 'Guias completos missão por missão para ambas as campanhas. Cada guia inclui objetivos, informações do inimigo, frota recomendada e dicas para rank S.',
    ja: '両キャンペーンの完全ミッション別攻略ガイド。各ガイドには目標、敵情報、推奨艦隊編成、Sランク取得のコツが含まれます。',
    fr: 'Guides complets mission par mission pour les deux campagnes. Chaque guide inclut les objectifs, les informations ennemies, la flotte recommandée et des astuces pour le rang S.',
    de: 'Vollständige Missions-für-Mission-Guides für beide Kampagnen. Jeder Guide enthält Ziele, Feindinformationen, empfohlene Flotte und Tipps für S-Rang.'
  },
  'walkthrough.tab.all': {
    en: 'All Missions', 'zh-Hans': '全部关卡', es: 'Todas', ar: 'كل المهام', pt: 'Todas', ja: '全ミッション', fr: 'Toutes', de: 'Alle'
  },
  'walkthrough.tab.rt1': {
    en: 'RTT I — Earth', 'zh-Hans': 'RTT I — 地球军', es: 'RTT I — Tierra', ar: 'RTT I — الأرض', pt: 'RTT I — Terra', ja: 'RTT I — 地球', fr: 'RTT I — Terre', de: 'RTT I — Erde'
  },
  'walkthrough.tab.rt2e': {
    en: 'RTT II — Earth', 'zh-Hans': 'RTT II — 地球军', es: 'RTT II — Tierra', ar: 'RTT II — الأرض', pt: 'RTT II — Terra', ja: 'RTT II — 地球', fr: 'RTT II — Terre', de: 'RTT II — Erde'
  },
  'walkthrough.tab.rt2b': {
    en: 'RTT II — Bydo', 'zh-Hans': 'RTT II — Bydo', es: 'RTT II — Bydo', ar: 'RTT II — Bydo', pt: 'RTT II — Bydo', ja: 'RTT II — バイド', fr: 'RTT II — Bydo', de: 'RTT II — Bydo'
  },
  'walkthrough.h2.all': { en: 'All Missions', 'zh-Hans': '全部关卡', es: 'Todas las Misiones', ar: 'جميع المهام', pt: 'Todas as Missões', ja: '全ミッション', fr: 'Toutes les missions', de: 'Alle Missionen' },
  'walkthrough.h2.rt1': { en: 'R-Type Tactics I — Earth Force Campaign', 'zh-Hans': 'R-Type Tactics I — 地球军战役', es: 'R-Type Tactics I — Campaña Terrestre', ar: 'R-Type Tactics I — حملة قوة الأرض', pt: 'R-Type Tactics I — Campanha Terrestre', ja: 'R-Type Tactics I — 地球軍キャンペーン', fr: 'R-Type Tactics I — Campagne Terrienne', de: 'R-Type Tactics I — Erdstreitkräfte-Kampagne' },
  'walkthrough.h2.rt2e': { en: 'R-Type Tactics II — Earth Force Campaign', 'zh-Hans': 'R-Type Tactics II — 地球军战役', es: 'R-Type Tactics II — Campaña Terrestre', ar: 'R-Type Tactics II — حملة قوة الأرض', pt: 'R-Type Tactics II — Campanha Terrestre', ja: 'R-Type Tactics II — 地球軍キャンペーン', fr: 'R-Type Tactics II — Campagne Terrienne', de: 'R-Type Tactics II — Erdstreitkräfte-Kampagne' },
  'walkthrough.h2.rt2b': { en: 'R-Type Tactics II — Bydo Empire Campaign', 'zh-Hans': 'R-Type Tactics II — Bydo帝国战役', es: 'R-Type Tactics II — Campaña Bydo', ar: 'R-Type Tactics II — حملة إمبراطورية Bydo', pt: 'R-Type Tactics II — Campanha Bydo', ja: 'R-Type Tactics II — バイド帝国キャンペーン', fr: 'R-Type Tactics II — Campagne de l\'Empire Bydo', de: 'R-Type Tactics II — Bydo-Imperium-Kampagne' },
  'walkthrough.diff.easy': { en: 'Easy', 'zh-Hans': '简单', es: 'Fácil', ar: 'سهل', pt: 'Fácil', ja: '簡単', fr: 'Facile', de: 'Leicht' },
  'walkthrough.diff.medium': { en: 'Medium', 'zh-Hans': '中等', es: 'Medio', ar: 'متوسط', pt: 'Médio', ja: '普通', fr: 'Moyen', de: 'Mittel' },
  'walkthrough.diff.hard': { en: 'Hard', 'zh-Hans': '困难', es: 'Difícil', ar: 'صعب', pt: 'Difícil', ja: '困難', fr: 'Difficile', de: 'Schwer' },
  'walkthrough.diff.boss': { en: 'Boss', 'zh-Hans': 'Boss', es: 'Jefe', ar: 'زعيم', pt: 'Chefe', ja: 'ボス', fr: 'Boss', de: 'Boss' },

  // ── Tips Page ──
  'tips.title': {
    en: 'Advanced Tips & Tricks', 'zh-Hans': '进阶技巧与心得', es: 'Consejos y Trucos Avanzados', ar: 'نصائح وحيل متقدمة', pt: 'Dicas e Truques Avançados', ja: '上級テクニック＆コツ', fr: 'Astuces et conseils avancés', de: 'Fortgeschrittene Tipps & Tricks'
  },
  'tips.intro': {
    en: 'Once you\'ve got the basics down, these techniques will elevate your game. Covers fleet composition theory, hidden secrets, Cosmos-specific changes, and combat tactics that the tutorial never mentions.',
    'zh-Hans': '掌握基础后，这些技巧将提升你的水平。涵盖舰队搭配理论、隐藏秘密、Cosmos版专属改动以及教程从未提及的战斗技巧。',
    es: 'Una vez que domines lo básico, estas técnicas elevarán tu juego. Cubre teoría de composición de flota, secretos ocultos, cambios específicos de Cosmos y tácticas de combate que el tutorial nunca menciona.',
    ar: 'بمجرد إتقان الأساسيات، سترفع هذه التقنيات مستوى لعبتك. تغطي نظرية تكوين الأسطول والأسرار المخفية وتغييرات Cosmos وتكتيكات القتال التي لا يذكرها البرنامج التعليمي.',
    pt: 'Depois de dominar o básico, estas técnicas elevarão seu jogo. Cobre teoria de composição de frota, segredos ocultos, mudanças específicas do Cosmos e táticas que o tutorial nunca menciona.',
    ja: '基本をマスターしたら、これらのテクニックであなたのゲームを次のレベルへ。艦隊編成理論、隠された秘密、Cosmos版固有の変更点、チュートリアルでは語られない戦術をカバー。',
    fr: 'Une fois les bases maîtrisées, ces techniques élèveront votre jeu. Couvre la théorie de composition de flotte, les secrets cachés, les changements propres à Cosmos et des tactiques que le tutoriel ne mentionne jamais.',
    de: 'Sobald du die Grundlagen beherrschst, heben diese Techniken dein Spiel auf das nächste Level. Deckt Flottenbau-Theorie, versteckte Geheimnisse, Cosmos-spezifische Änderungen und Kampftaktiken ab.'
  },
  'tips.sec.fleet': {
    en: 'Fleet Composition Theory', 'zh-Hans': '舰队搭配理论', es: 'Teoría de Composición de Flota', ar: 'نظرية تكوين الأسطول', pt: 'Teoria de Composição de Frota', ja: '艦隊編成理論', fr: 'Théorie de composition de flotte', de: 'Flottenzusammenstellungs-Theorie'
  },
  'tips.sec.hidden': {
    en: 'Hidden Content & Unlockables', 'zh-Hans': '隐藏内容与解锁', es: 'Contenido Oculto', ar: 'المحتوى المخفي', pt: 'Conteúdo Oculto', ja: '隠し要素＆アンロック', fr: 'Contenu caché', de: 'Versteckte Inhalte'
  },
  'tips.sec.cosmos': {
    en: "What's New in Cosmos", 'zh-Hans': 'Cosmos版新内容', es: 'Novedades en Cosmos', ar: 'ما الجديد في Cosmos', pt: 'Novidades no Cosmos', ja: 'Cosmos版の新要素', fr: 'Nouveautés Cosmos', de: 'Neu in Cosmos'
  },
  'tips.sec.combat': {
    en: 'Advanced Combat Tactics', 'zh-Hans': '高级战斗技巧', es: 'Tácticas Avanzadas', ar: 'تكتيكات قتالية متقدمة', pt: 'Táticas Avançadas', ja: '上級戦闘テクニック', fr: 'Tactiques avancées', de: 'Fortgeschrittene Kampftaktiken'
  },

  // ── AdSense placeholders ──
  'ad.label': {
    en: 'AdSense', 'zh-Hans': '广告位', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung'
  },
  'ad.afterhero': { en: 'Ad — After Hero', 'zh-Hans': '广告 — 首屏下方', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung' },
  'ad.mid': { en: 'Ad — Mid Content', 'zh-Hans': '广告 — 内容中部', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung' },
  'ad.below': { en: 'Ad — Below Content', 'zh-Hans': '广告 — 内容下方', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung' },
  'ad.beforelist': { en: 'Ad — Before List', 'zh-Hans': '广告 — 列表上方', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung' },
  'ad.belowlist': { en: 'Ad — Below List', 'zh-Hans': '广告 — 列表下方', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung' },
  'ad.sidebar': { en: 'Ad — Sidebar', 'zh-Hans': '广告 — 侧边栏', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung' },
  'ad.aftertoc': { en: 'Ad — After TOC', 'zh-Hans': '广告 — 目录下方', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung' },
  'ad.afterintro': { en: 'Ad — After Intro', 'zh-Hans': '广告 — 引言下方', es: 'Anuncio', ar: 'إعلان', pt: 'Anúncio', ja: '広告', fr: 'Publicité', de: 'Werbung' }
  };

  // ─── Language detection & persistence ──────────────────────────────

  function detectLang() {
    // 1. Check localStorage
    const stored = localStorage.getItem('rtg-lang');
    if (stored && SUPPORTED.includes(stored)) return stored;

    // 2. Check browser preference
    const browser = (navigator.language || navigator.userLanguage || 'en').split('-')[0];
    // Map common browser codes
    const map = { zh: 'zh-Hans', ja: 'ja', ar: 'ar', es: 'es', pt: 'pt', fr: 'fr', de: 'de', en: 'en' };
    const mapped = map[browser];
    if (mapped && SUPPORTED.includes(mapped)) return mapped;

    // 3. Default
    return 'en';
  }

  let currentLang = detectLang();

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('rtg-lang', lang);
    applyLang();
  }

  function t(key) {
    if (!T[key]) return key;
    return T[key][currentLang] || T[key]['en'] || key;
  }

  function applyLang() {
    // Update <html> lang and dir
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Update CSS for RTL
    if (currentLang === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const isHtml = el.dataset.i18nHtml === 'true';
      const text = t(key);
      if (isHtml) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Update lang switcher dropdown
    const sel = document.getElementById('langSwitcher');
    if (sel) sel.value = currentLang;

    // Trigger custom event for in-page scripts
    document.documentElement.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
  }

  // ─── Build language switcher ───────────────────────────────────────

  function buildSwitcher() {
    const containers = document.querySelectorAll('[data-lang-switcher]');
    containers.forEach(container => {
      const select = document.createElement('select');
      select.id = 'langSwitcher';
      select.setAttribute('aria-label', 'Language');
      Object.assign(select.style, {
        padding: '0.35rem 0.5rem',
        borderRadius: '6px',
        border: '1px solid var(--border, #1e1e30)',
        background: 'var(--surface, #141420)',
        color: '#e0e0e0',
        fontSize: '0.8rem',
        cursor: 'pointer',
        outline: 'none',
        maxWidth: '130px'
      });
      SUPPORTED.forEach(code => {
        const opt = document.createElement('option');
        opt.value = code;
        opt.textContent = LABELS[code];
        select.appendChild(opt);
      });
      select.value = currentLang;
      select.addEventListener('change', function () {
        setLang(this.value);
      });
      container.appendChild(select);
    });
  }

  // ─── RTL CSS injection ─────────────────────────────────────────────

  function injectRTLStyles() {
    const style = document.createElement('style');
    style.id = 'rtl-styles';
    style.textContent = `
      html.rtl body { direction: rtl; }
      html.rtl .nav { flex-direction: row-reverse; }
      html.rtl .header-inner { flex-direction: row-reverse; }
      html.rtl .mission-card { direction: rtl; }
      html.rtl .tip-box { border-left: none; border-right: 3px solid var(--accent); border-radius: 8px 0 0 8px; }
      html.rtl .tip-box.warn { border-right-color: var(--accent-warm); }
      html.rtl .tip-box.good { border-right-color: var(--success); }
      html.rtl .article ul, html.rtl .article ol { margin: 0 1.5rem 1rem 0; }
      html.rtl .breadcrumb { direction: rtl; }
      html.rtl .unit-table thead th { text-align: right; }
      html.rtl .unit-table tbody td { text-align: right; }
      html.rtl .card .tag { align-self: flex-end; }
      html.rtl .filter-bar { direction: rtl; }
      html.rtl .tabs { flex-direction: row-reverse; }
      @media (max-width: 768px) {
        html.rtl .nav.open { align-items: flex-end; }
      }
    `;
    document.head.appendChild(style);
  }

  // ─── Init ──────────────────────────────────────────────────────────

  function init() {
    injectRTLStyles();
    buildSwitcher();
    applyLang();
  }

  document.addEventListener('DOMContentLoaded', init);

  // Expose API
  window.__i18n = { t, setLang, getLang: () => currentLang, SUPPORTED, LABELS };
})();
