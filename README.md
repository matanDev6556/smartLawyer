# Legal AI Assistant

יועץ משפטי חכם - מערכת צ'אט משפטית מבוססת AI

## הגדרה ראשונית

1. השג מפתח API של Gemini:
   - בקר ב-https://makersuite.google.com/app/apikey
   - צור מפתח API חדש

2. הגדר את מפתח ה-API:
   - צור קובץ `.env` בתיקיית הפרויקט
   - העתק את התוכן מ-`.env.example`
   - החלף את `your_api_key_here` במפתח האמיתי שלך

3. התקן את התלויות:
   ```bash
   npm install
   ```

4. הפעל את השרת:
   ```bash
   npm run dev
   ```

## הערות חשובות

- המערכת מספקת מידע כללי בלבד ולא מהווה תחליף לייעוץ משפטי מקצועי
- יש להתייעץ עם עורך דין מוסמך לקבלת ייעוץ משפטי מחייב
- לעולם אל תשתף את מפתח ה-API שלך או תעלה אותו ל-version control