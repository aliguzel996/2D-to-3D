# 2D to 3D

2D to 3D is a desktop and web tool for turning text and SVG artwork into editable 3D extrusions. It is built with React, Three.js, Vite, and Electron.

## What It Does

- Converts typed text into 3D geometry.
- Converts SVG artwork into 3D geometry.
- Lets you preview and edit text or SVG in 2D before extrusion.
- Lets you adjust the generated 3D result in real time.

## Main Features

- Text workflow
  - Multi-line text input
  - Left, center, and right alignment
  - Letter spacing control
  - Built-in font presets
  - Custom font upload
  - 2D text preview before extrusion
- SVG workflow
  - Paste or load SVG source
  - 2D SVG outline preview
  - Optional color-based SVG splitting
- Extrusion controls
  - Depth
  - Detail
  - Curve segments
  - X and Y scale
  - Scale lock
  - 90 degree clockwise rotation
  - Polygon iteration control
- Bevel and contour
  - Bevel and emboss controls
  - Bevel size
  - Bevel depth
  - Outline mode and outline thickness
- Materials and shading
  - Material presets such as gold, obsidian, ice, and concrete
  - Base tint and contour tint
  - Reflection
  - Refraction
  - Bump
  - Coating
  - Coating tint
  - Refraction texture upload
  - Bump texture upload
- UV controls
  - UV lock
  - UV scale X and Y
  - UV offset X and Y
  - UV rotation
- Scene and background
  - Studio and sun lighting modes
  - Light intensity, turn, lift, and fill controls
  - Bloom toggle and bloom strength
  - Solid, gradient, and transparent backgrounds
  - Gradient editor with stop colors and angle control
  - Optional background grid
- Camera and turntable
  - Orbit controls for inspecting the model
  - Turntable play and stop
  - Left and right turn direction
  - Turn speed control
- Capture and export
  - Beauty capture
  - Alpha mask capture
  - Combined beauty and alpha capture
  - Background include toggle
  - Antialias toggle for viewport and capture
  - Viewport and aspect-ratio capture modes
  - Frame count
  - Capture FPS
  - Long-edge pixel size
  - Export captured frames to ZIP
  - Baked OBJ export
- Packaging
  - Web build output
  - Windows portable build
  - Windows installer build for itch.io style distribution

## Build Outputs

- Web output: `web app/`
- Windows portable output: `windows app/`
- Windows installer output: `itch build/`

## Development

```bash
npm install
npm run dev
```

## Production Builds

```bash
npm run build:web
npm run pack:windows
npm run pack:itch
```

---

## English

2D to 3D is a text and SVG extrusion tool. It lets you prepare text or vector artwork in 2D, convert it into 3D, apply materials and scene settings, and export previews or packaged outputs.

### Features

- Text to 3D
- SVG to 3D
- Multi-line text support
- Alignment controls
- Letter spacing controls
- Font presets and custom font upload
- 2D preview before extrusion
- Real-time extrusion controls
- Bevel and emboss controls
- Outline rendering controls
- Material presets and tint controls
- Reflection, refraction, bump, and coating controls
- UV scale, offset, rotation, and lock controls
- Studio and sun lighting modes
- Bloom control
- Solid, gradient, and transparent backgrounds
- Gradient stop editing and optional grid overlay
- Turntable controls
- Beauty and alpha capture modes
- Frame export to ZIP
- Baked OBJ export
- Web, Windows portable, and Windows installer builds

---

## Türkce

2D to 3D, yazi ve SVG dosyalarini 3D ekstrude modele cevirmek icin kullanilan bir aractir. Kullanici once 2D duzenleme yapar, sonra modeli 3D'ye cevirir, materyal ve sahne ayarlar, onizleme alir ve cikti olusturur.

### Ozellikler

- Yaziyi 3D modele cevirme
- SVG'yi 3D modele cevirme
- Cok satirli yazi destegi
- Sola, ortaya ve saga hizalama
- Harf araligi ayari
- Hazir font secenekleri ve custom font yukleme
- Extrude oncesi 2D onizleme
- Canli extrude ayarlari
- Bevel ve emboss kontrolleri
- Outline kontrolleri
- Materyal presetleri ve tint ayarlari
- Reflection, refraction, bump ve coating ayarlari
- UV scale, offset, rotation ve lock ayarlari
- Studio ve sun isik modlari
- Bloom ayari
- Solid, gradient ve transparent arkaplan
- Gradient renk duraklari ve opsiyonel grid
- Turntable kontrolleri
- Beauty ve alpha capture modlari
- Frame'leri ZIP olarak export etme
- Bake edilmis OBJ export
- Web, Windows portable ve Windows setup ciktilari

---

## Deutsch

2D to 3D ist ein Tool, das Text und SVG-Grafiken in bearbeitbare 3D-Extrusionen umwandelt. Der Benutzer kann Inhalte zuerst in 2D vorbereiten, dann in 3D umwandeln, Materialien und Szene anpassen und Vorschauen oder Builds exportieren.

### Funktionen

- Text zu 3D
- SVG zu 3D
- Mehrzeiliger Text
- Linke, zentrierte und rechte Ausrichtung
- Zeichenabstand
- Voreingestellte Fonts und eigener Font-Upload
- 2D-Vorschau vor der Extrusion
- Live-Extrusionsparameter
- Bevel- und Emboss-Steuerung
- Outline-Steuerung
- Material-Presets und Tint-Farben
- Reflection-, Refraction-, Bump- und Coating-Steuerung
- UV-Skalierung, Offset, Rotation und Lock
- Studio- und Sun-Lichtmodus
- Bloom-Steuerung
- Solider, gradienter oder transparenter Hintergrund
- Gradient-Editor und optionales Grid
- Turntable-Steuerung
- Beauty- und Alpha-Capture
- Export der Frames als ZIP
- Gebackener OBJ-Export
- Web-, Windows-Portable- und Windows-Installer-Builds

---

## Francais

2D to 3D est un outil qui transforme du texte et des fichiers SVG en extrusions 3D modifiables. L'utilisateur peut d'abord preparer le contenu en 2D, puis le convertir en 3D, regler les materiaux et la scene, et exporter des apercus ou des builds.

### Fonctionnalites

- Texte vers 3D
- SVG vers 3D
- Texte multiligne
- Alignement gauche, centre et droite
- Reglage de l'espacement des lettres
- Polices predefinies et import de police personnalisee
- Apercu 2D avant extrusion
- Reglages d'extrusion en temps reel
- Reglages de bevel et emboss
- Reglages d'outline
- Presets de materiaux et teintes
- Reglages reflection, refraction, bump et coating
- Reglages UV: echelle, offset, rotation et verrouillage
- Modes d'eclairage studio et sun
- Reglage du bloom
- Arriere-plan solid, gradient ou transparent
- Editeur de gradient et grille optionnelle
- Controles du turntable
- Captures beauty et alpha
- Export des frames en ZIP
- Export OBJ bake
- Builds web, Windows portable et installateur Windows

---

## Русский

2D to 3D - это инструмент для преобразования текста и SVG-графики в редактируемые 3D-экструзии. Пользователь может сначала настроить содержимое в 2D, затем перевести его в 3D, настроить материалы и сцену, а затем экспортировать предпросмотры или сборки.

### Возможности

- Преобразование текста в 3D
- Преобразование SVG в 3D
- Поддержка многострочного текста
- Выравнивание по левому краю, по центру и по правому краю
- Настройка межбуквенного интервала
- Встроенные шрифты и загрузка собственного шрифта
- 2D-просмотр перед экструзией
- Параметры экструзии в реальном времени
- Управление bevel и emboss
- Управление outline
- Пресеты материалов и tint-цвета
- Параметры reflection, refraction, bump и coating
- UV-настройки: масштаб, смещение, поворот и блокировка
- Режимы освещения studio и sun
- Управление bloom
- Solid, gradient и transparent фон
- Редактор градиента и дополнительная сетка
- Управление turntable
- Режимы захвата beauty и alpha
- Экспорт кадров в ZIP
- Запеченный экспорт OBJ
- Сборки для web, Windows portable и Windows installer
