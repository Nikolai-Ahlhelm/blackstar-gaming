---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 🖌️ Design Guide

Ein Design Guide für Wiki, MilSim und Blog Beiträge.

:::caution Wichtig
Beachte Leerzeichen!  
Und achte auch darauf die Richtigen Zeichen zu benutzen.  
Bsp: ` ´ '
:::


## Überschriften erstellen  

># Überschrift1  

````
# Überschrift1  
````

>## Überschrift2  

````
## Überschrift2 
````
>### Überschrift3  

````
### Überschrift3 
````

:::caution Achtung!  
Zwischen Überschrift und Text bitte immer eine Zeile Abstand lassen. Mehrere Absätze werden dabei nicht erkannt!  
Auch zwischen `#` und dem `Titelnamen` muss ein Leerzeichen sein!
:::  


## Horizontale Linien  

Für die Abgrenzung von bestimmten Bereichen.  

**Beispiel:**

---  

**Syntax:**

````
---
````


## Einen Link erstellen  
[Beispiel](https://www.wir-machen-druck.de/product-icon/lehrerstempel-automatik-mit-motiv-das-hast-du-super-gemacht/thumbnail/lehrerstempel-automatik-mit-motiv-das-hast-du-super-gemacht_5aca7f96e7e3c796c3463f2c5ad01f8249.png)  

**Syntax:**

````
[Anzeigename](https://link.zum.logo/logo.png)
````


## Wörter hervorheben  

**Fettgedruckte Wörter**  
**Syntax:**

````
**Fettgedruckte Wörter**
````

---

*kursive Wörter*  
**Syntax:**

````
*kursive Wörter*  
```` 

---

<u>unterstrichene Wörter</u>  

**Syntax:**

````
<u>unterstrichene Wörter</u>   
```` 

---

## Aufzählungen erstellen  
Es gibt verschiedene Weisen der Aufzählung:  

- Text
- Beispiel

**Syntax:**

````
- Text
- Beispiel 
```` 

---

1. Text  
2. Beispiel

````
1. Text  
2. Beispiel
```` 

---

## Infokästen erstellen  

:::info 
Beispiel Text.  
Nächste Zeile.
:::

````
:::info 
Beispiel Text.  
Nächste Zeile.
:::
```` 

---

:::tip Tipp
Beispiel Text.  
Nächste Zeile.
:::

````
:::tip Tipp
Beispiel Text.  
Nächste Zeile.
:::
```` 

---

:::caution Achtung
Beispiel Text.  
Nächste Zeile.
:::

````
:::caution Achtung
Beispiel Text.  
Nächste Zeile.
:::
```` 

---

:::danger
Beispiel Text.  
Nächste Zeile.
:::

````
:::danger
Beispiel Text.  
Nächste Zeile.
:::
```` 

---

:::note 
Beispiel Text.  
Nächste Zeile.
:::

````
:::note 
Beispiel Text.  
Nächste Zeile.
:::
````

---

:::info Änderungswünsche
Wenn du als Überschrift z.B. "note" nicht möchtest, sondern etwas anderes, musst du hinter das `note` oder alle Anderen Hinweisboxen deinen eigenen Titel schreiben mit einem Leerzeichen getrennt. Beispiele findest du auch oben.
:::








:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::










<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
