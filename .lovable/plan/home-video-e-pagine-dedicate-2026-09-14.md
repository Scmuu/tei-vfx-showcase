# Home video e pagine dedicate

## Obiettivo
Trasformare la schermata iniziale in una presentazione essenziale a tutto schermo, con il video allegato sullo sfondo, il nome TEI, la bio, due pulsanti principali e i social.

## Modifiche
- Caricare il video allegato come `background.mp4` tramite il sistema asset del progetto.
- Rimuovere la foto profilo dalla home e usare il video in autoplay, loop, muted e playsinline, con copertura completa e contrasto sufficiente per il testo.
- Ridisegnare la home senza la vecchia barra: nome e descrizione centrati, pulsanti grandi Portfolio e Shop, social centrati in basso.
- Aggiungere `/portfolio` con la sezione My Work esistente, divisa tra Steam Artworks e video TikTok.
- Aggiungere `/shop` con i prodotti e prezzi esistenti.
- Aggiungere una navigazione discreta nelle pagine interne per tornare alla home e passare tra Portfolio e Shop.
- Usare Gang of Three se caricabile in modo affidabile; in alternativa applicare un carattere display simile e coerente con lo stile gaming.
- Mantenere la palette nera e rosso scuro già presente e il cursore particellare.

## Dettagli tecnici
- Le nuove pagine saranno gestite dalle rotte React già presenti.
- I dati e i link esistenti saranno riutilizzati senza modificarne contenuto o destinazione.
- Il video sarà servito dal CDN degli asset, evitando di aggiungere il file MP4 al repository.
- Saranno controllate home, Portfolio e Shop su desktop e mobile, inclusi collegamenti, leggibilità e riproduzione del video.
