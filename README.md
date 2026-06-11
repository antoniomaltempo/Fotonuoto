# FotoNuoto - Fotografia di Nuoto Professionale 🏊‍♂️📸

Sito web one-page dedicato alla fotografia professionale di nuoto, con galleria interattiva e e-commerce per la vendita di stampe fotografiche.

## 🌟 Caratteristiche

### ✨ Design Moderno
- Layout one-page responsive e fluido
- Design minimalista e elegante
- Colori azzurri e blu che richiamano l'acqua
- Animazioni e transizioni smooth

### 📸 Galleria Fotografica
- 6 categorie di foto di nuoto
- Immagini ad alta qualità da Unsplash
- Effetto hover dinamico
- Layout grid responsive

### 🛒 E-commerce Integrato
- 6 prodotti fotografici con prezzi diversi
- 3 formati di stampa: 30x40cm, 40x50cm, 50x70cm
- Carrello laterale interattivo
- Aggiunta/rimozione articoli dal carrello
- Calcolo totale automatico
- Salvataggio carrello nel localStorage
- Notifiche di feedback

### 📧 Sezione Contatti
- Form di contatto funzionale
- Informazioni di contatto complete
- Link ai social media

### 📱 Responsive Design
- Perfettamente ottimizzato per mobile
- Tablet e desktop support
- Menu e carrello adattabili

## 📁 Struttura File

```
fotonuoto/
├── index.html    # Pagina principale
├── style.css     # Styling e responsive
├── script.js     # Funzionalità JavaScript
└── README.md     # Questo file
```

## 🚀 Come Usare

1. **Clona il repository**
   ```bash
   git clone https://github.com/antoniomaltempo/fotonuoto.git
   cd fotonuoto
   ```

2. **Apri il sito**
   - Semplicemente apri `index.html` nel browser
   - O usa un server locale (consigliato)

3. **Server Locale (Optional)**
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

4. **Visita il sito**
   - Apri `http://localhost:8000` nel browser

## 🎨 Personalizzazione

### Colori
Modifica le variabili CSS in `style.css`:
```css
:root {
    --primary-color: #0066cc;      /* Blu primario */
    --secondary-color: #00a8e8;    /* Blu secondario */
    --accent-color: #ff6b35;       /* Arancione */
    --text-color: #333;             /* Testo */
    --bg-light: #f8f9fa;           /* Sfondo chiaro */
}
```

### Contenuti
- **Header**: Modifica `.logo` in `index.html`
- **Hero**: Cambia titolo e descrizione
- **Galleria**: Sostituisci le URL delle immagini
- **Prodotti**: Modifica nome, prezzo e descrizione
- **Contatti**: Aggiorna email e telefono

### Immagini
Sostituisci gli URL Unsplash con le tue foto:
```html
<img src="TUA_FOTO_URL" alt="Descrizione">
```

## 💳 E-commerce

### Funzionalità Carrello
- ✅ Aggiunta articoli
- ✅ Visualizzazione carrello laterale
- ✅ Calcolo totale
- ✅ Rimozione articoli
- ✅ Salvataggio persistente
- ✅ Notifiche

### Checkout
Attualmente mostra un riepilogo. Per integrare pagamenti reali:
- Stripe
- PayPal
- Altre piattaforme di pagamento

## 📱 Browser Support

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔧 Sviluppo Futuro

- [ ] Integrazione pagamenti Stripe/PayPal
- [ ] Backend per gestione ordini
- [ ] Sistema di autenticazione utenti
- [ ] Database per foto
- [ ] Blog per articoli
- [ ] Sistema prenotazioni servizi
- [ ] Admin panel per gestire prodotti

## 📞 Contatti

**FotoNuoto**
- 📧 info@fotonuoto.it
- 📞 +39 333 123 4567
- 📍 Piscina Comunale, via della Velocità 10, 00100 Roma

## 📄 Licenza

Libero da usare e modificare per uso personale e commerciale.

---

**Creato con ❤️ per gli amanti della fotografia di nuoto**