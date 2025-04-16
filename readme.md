
---

```md
# 🚀 ghiasi-ui-library

کتابخونه‌ی کامپوننت‌های قابل استفاده مجدد برای React، ساخته شده با عشق ❤️، Vite، TypeScript و TailwindCSS.

[![npm version](https://img.shields.io/npm/v/ghiasi-ui-library.svg?style=flat)](https://www.npmjs.com/package/ghiasi-ui-library)
[![license](https://img.shields.io/npm/l/ghiasi-ui-library.svg)](https://github.com/Mohammad-Ghiasi/ghiasi-ui-library/blob/main/LICENSE)

---

## ✨ ویژگی‌ها

- 📦 پکیج شده به صورت ESM و CJS
- 💅 استایل‌دهی با Tailwind و `tailwind-merge`
- 🧪 تست شده با Vitest و Testing Library
- 📖 همراه با Storybook برای مستندات و پیش‌نمایش کامپوننت‌ها

---

## 📦 نصب

با استفاده از Yarn:

```bash
yarn add ghiasi-ui-library
```

یا با npm:

```bash
npm install ghiasi-ui-library
```

---

## 🔌 استفاده

```tsx
import { Button } from 'ghiasi-ui-library';

export default function App() {
  return <Button variant="primary">کلیک کن</Button>;
}
```

> توجه: این پکیج نیازمند نصب `react` و `react-dom` به عنوان peer dependency هست. (ورژن ^18 یا ^19)

---

## 🧰 دستورات توسعه

### 📚 اجرای Storybook

برای اجرای مستندات کامپوننت‌ها به صورت تعاملی:

```bash
npm run storybook
```

### 🔨 ساخت کتابخونه

برای build کردن پکیج جهت انتشار:

```bash
npm run build
```

### 🧪 اجرای تست‌ها

اجرای تست‌های واحد با Vitest:

```bash
npm test
```

مشاهده تست‌ها در حالت watch:

```bash
npm run test:watch
```

### 🧹 لینت و فرمت

بررسی lint و فرمت کد:

```bash
npm run lint
npm run format
```

### 🧼 پاک‌سازی پروژه

حذف فایل‌های build شده و اضافی:

```bash
npm run clean
```

---

## 🧑‍💻 سازنده

ساخته شده با ❤️ توسط [@Mohammad-Ghiasi](https://github.com/Mohammad-Ghiasi)

---

## 📄 لایسنس

MIT
```

---