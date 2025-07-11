# 🏋️ Workout Tracker App

A simple app to track your workouts, reps, and weights, built with **React Native** and **Expo**.

---

## 📌 Features

- Calendar view of the current month
- Tap a date to open a workout page
- Clean header UI

---

## ⚙️ Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [react-native-calendars](https://github.com/wix/react-native-calendars)
- [react-native-paper](https://callstack.github.io/react-native-paper/)
- [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit)

---

## 🚀 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/YOUR-USERNAME/workout-tracker.git
cd workout-tracker
```

### 2. Install dependencies

```sh
npm install
# or
yarn install
```

### 3. Run the app

Start the Expo development server:

```sh
npm start
# or
yarn start
```

- Scan the QR code in Expo Go, or
- Run on Android: `npm run android`
- Run on iOS: `npm run ios`
- Run on Web: `npm run web`

---

## 📁 Project Structure

```
app/
  ├─ (tabs)/
  │   ├─ _layout.tsx         # Tab layout
  │   ├─ index.tsx           # Home screen (calendar)
  │   └─ workoutList.tsx     # List of workouts
  ├─ workout/
  │   └─ [date].tsx          # Workout page for selected date
  ├─ _layout.tsx             # Root layout
  ├─ +html.tsx               # HTML entry
  ├─ +not-found.tsx          # 404 page
  └─ modal.tsx               # Modal screen
assets/
  ├─ fonts/
  └─ images/
components/
  ├─ calendar.tsx
  ├─ EditScreenInfo.tsx
  ├─ ExternalLink.tsx
  ├─ StyledText.tsx
  ├─ Themed.tsx
  ├─ useClientOnlyValue.ts
  ├─ useColorScheme.ts
constants/
  └─ Colors.ts
```

---

## 🧪 Testing

Run tests with:

```sh
npm test
```

---

## 📦 Build .apk (optional)

To build an Android APK using EAS Build:

```sh
npm install -g eas-cli
npx eas build:configure
npx eas build -p android --profile preview
```

---

## 📄 License

This project is licensed under the 0BSD license.
