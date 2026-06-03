# Introduction
If you’ve ever used an official Pathfinder 2e module in Foundry, you’ll know how amazing they are. The journal text has been edited so that you can send roll links to the chat for your players, locations and items are linked so that looking up relevant information or rules is only a click away. Most impressive is the way that the module journals have been meticulously prepared to look like the actual adventure PDF or book from Paizo themselves. This is the ultimate way to run these adventures.

Unfortunately, Paizo has shown no interest in adapting pre-remaster adventures into official modules, which leaves us with tools like fryguy’s PDF to Foundry, or waiting for a re-release that may never come. PDF to Foundry is an excellent tool, but it primarily imports the raw text and images, and the journals it creates are aesthetically lacking, and can be hard to navigate. While these are fine for immediate use, they leave a lot to be desired in presentation and function. If only there were a way to make these journals look and act as good as the official ones.

I have good news. 🎵You've got the touch, you've got the power!🎵 I can teach you this power, but it is a complicated process that we need to take step by step.

## Required:
* [Foundry VTT](https://foundryvtt.com/)
* [Visual Studio](https://code.visualstudio.com/Download) or a similar program to write code
* [World Scripter](https://foundryvtt.com/packages/world-scripter) module
* The PDF of a [Pathfinder Adventure](https://store.paizo.com) you are adapting

## Recommended:
* Own at least one official Pathfinder adventure module, if you don't have one the [Beginner Box](https://www.foundryvtt.store/products/pf2e-beginner-box) is a great place to start.
* [PDF to Foundry](https://foundryvtt.com/packages/pdftofoundry) module
* [Custom CSS](https://foundryvtt.com/packages/custom-css) module
* [Firefox](https://www.firefox.com/en-US/browsers/desktop/windows/)
* [What the Font Font Finder](https://www.myfonts.com/pages/whatthefont/)
* u/lady_of_luck has [a really helpful guide](https://www.reddit.com/r/FoundryVTT/s/oblivFIO1g) that I recommend reading, I used their guide and their code for this project.

# Part 1: Basics of HTML and CSS
In this section I will go over the basics of writing a CSS file and the accompanying HTML code in Foundry to ensure that the style rules apply. I will go into some detail into the reasoning why to follow this method, but HTML and CSS are the building blocks of the internet that you use daily, and there are many robust resources you can use to learn much more than I will be teaching you today. I will be focusing on adapting Pathfinder adventures, but the techniques in this section will apply universally to any adventure text that you have a PDF copy of.

There are two ways I am aware of to inject a .css file into Foundry, one is to use a module like World Scripter and the other is to create your own module. As of today (May 2026), v14 is the newest version of Foundry and the World Scripter module is not updated to v14. I am updating this guide to have my origian setup, which I believe is easier, and the new set up that doesn't need a module to work and should be a little more stable. Once you have the .css file injected the rest of the tutorial will be mostly the same. Click the dropdown below that corresponds to the version of Foundry you will be using.

## Step 1a: One Module to Rule Them All, or Many Modules to Fill the Skies and Black the Sun?
 * This method of injecting a .css file is more involved then the module method, and it is worth deciding in advance how you will organize your content. Modules are portable, so you can install your module on different worlds and have access to the same content each time, you can give away your module or sell it (as long as the content in the module is yours to sell). There are two basic ways to proceed, make one mega-module that will store all the adventures you are adapting or creating, or create a separate module for each adventure.
 * The benefit of making a separate module per adventure is that it is simpler. If you are selling or giving away your own content, you will almost certainly want to use this method because everything your "customers" will need to run the content in Foundry should be included in one module. Setting up the .css file is also easier this way, but you will need a separate file for each module. The downside to making multiple modules is that you may end up repeating assets across multiple modules. Any images, font files, or sound files that you end up using in multiple adventures will get repeated. If you are storage restricted, it is possible that multiple modules would be less preferable for you. You also may have more difficulty maintaining multiple modules, if you make an improvement in one module you’ll need to repeat that work across every other module. If you are selling your module, your customers may expect you to maintain the module and update it to the most current version of Foundry.
 * The benefit of making a single larger module is that you don’t need to repeat assets every time they are required. While the base installation may be large, you’ll be less likely to run into issues of remembering which module contains which assets. Additionally, having a larger module makes it easier to maintain backups and keep the module up to date. The initial setup may take more effort, but if Foundry makes a change that breaks your module you will only need to fix it once instead of across multiple modules.
 * For personal use I prefer one module that contains all the adventures that I’ve adapted to Foundry. If I were to distribute the module to others I would prefer one module per adventure, but I would want to create some sort of system to standardize and document any sweeping changes across all modules.

## Step 1b: Setting Up A Module  
* Once you've decided how many modules you are making you will need to create the modules using Foundry
* In the modules page in your Foundry set up page, click the gear icon to open up a form to start inputting the module informatin
   * Name the module anything you’d like. The package identifier should populate automatically
   * Set the package version. If you are doing this module as part of a large project you may have a real system for the version numbers, especially if this module will be available to the public. Otherwise you can leave it at 1.
   * You don’t need a package URL, but if you are hosting your module on github or another file sharing service you can put the link there. That is important again for if you are selling or giving away your module to other people.
   * You should set the compatibility to the current version of Foundry, if you later upgrade to a new version you will want to change this number later or Foundry will yell at you every time you load the world.
   * Add author details if you expect to be available to maintain this project for others, otherwise this is unnecessary
   * Create a compendium pack. You will need to write the lowercase name yourself for this category, in my case mustardman42-conversions. I like using the Adventure document type, but if you are only including journals or only listing maps you could use journals or scenes.
   * Select the required system from the list of systems you have installed
   * Once you press the "Create Module" button at the bottom of the window, Foundry will create a folder in the module directory and a module.json file in that directory
* If you make a mistake while filling out the module details do not panic, you can edit the module.json directly to correct any mistakes or add information later
* With your module created you will need to set up some additional folders to stay organized
   * In the folder for your module you will want to create at least an assets folder and a styles folder. If you are planning on having a lot of script files you could create a scripts folder.
   * Inside your styles folder you will want to make a fonts subfolder, this is where all your fonts for this module should live. In the styles folder itself you will put your css file.
     * Open Visual Studio and press CTRL + N to create a Text File, or click the File menu to do the same thing. Save it as a .css with whatever name you want, and save it to your Foundry directory in your css folder. Whether you're hosting locally or not, make sure you can get the path to that file.
     * I have provided a tutorial.css file that you can use but I strongly recommend that you create your own from scratch to learn Visual Studio and just use my file to compare to.
   * You can organize your assets folder however you wish, but if you have multiple adventures in one module I recommend having separate folders for each adventure here. As an example, I could have a folder for Troubles in Otari called tio, a folder for Crown of the Kobold King called cotkk, and then a folder called monster core for any pictures of monsters that are going to appear in both adventures. Inside each adventure folder I recommend having a folder for portraits, a folder for tokens, a folder for journal images, and a folder for maps.

## Step 1c: Injecting Your .css File
 * If you are only planning on having one style, as in you have one adventure in this module and none of those style rules will ever need to apply to some other journal, you only need to add a small chunk of code to the module.json that directs Foundry to the css file in your directory. Open the module.json file in Visual Studio and add the code below after the "packs" section. You will need to change the file path to match the location and name of your .css file in your directory.
   * ```json
         "styles": [
            "src": "styles/tutorial.css"
         ],
     ```
 * If you are planning on having multiple styles, as in you have multiple adventures in a single module and some rules might be universal but others should only be applied to specific adventures you choose, you need to add a line of code that directs Foundry to a .mjs file we will create shortly. That line of code looks like this. You will need to change the file path to match the location and name of your .mjs file in your directory.
   * ```json
         "esmodules": [
            "tutorial.mjs"
         ],
     ```
   * A .mjs file is a file that contains javascript code. In our case we are including this code to apply the .css file, later on we will add new lines of code to apply a class to journal entries that we will flag for each adventure. In Visual Studio press CTRL + N to open a new text file. You will want to copy the code below into your new file, and be sure that you set the module_ID and the file path to your css file correctly.
     * ```javascript
         const MODULE_ID = "tutorial"; //Change this to the lowercase id at the top of your module.json

         var cssId = 'myCss'; //I adapted this code from Reddit user u/lady_of_luck, without their post none of my exploration into this topic would have been possible
            if (!document.getElementById(cssId))
            {
              var head  = document.getElementsByTagName('head')[0];
              var link  = document.createElement('link');
              link.id   = cssId;
              link.rel  = 'stylesheet';
              link.type = 'text/css';
              link.href = 'modules/tutorial/styles/tutorial.css'; //Put file path here!
              link.media = 'all';
              head.appendChild(link);
            }
       ```
 * Now we can start to move any existing journals, scenes, actors, and items into your module.
   * Reload Foundry and open up the world with the journals you are going to be styling.
   * You will need to open the settings for the world and enable your module, which will require another reload.
   * You should now see in the compendiums tab your compendium, which you can edit if you unlock it.
   * If you have existing journals, actors, scenes, or items for your adventure(s) (such as from a PDF to Foundry import), you can create an adventure in this compendium and drag and drop the elements from the sidebar to the compendium.

Once the journals are inside your compendium, you are ready to actually start writing style rules to make your journals pretty

## Step 2: Read Out Box
* You are ready to start writing style rules in your .css file, but for this first one I am going to advise you copy my code. The [second example](#step-3-embedding-an-image) will walk through step by step how I write these rules.
* Our first target will be a common element in a Pathfinder adventure, the Read Out box. Open your .css file in Visual Studio and copy and paste the following code:
    * ```css
      div.read-out {
        border-left: none;
        border-right: none;
        border-top: 1px ridge var(--color-border-light-tertiary);
        border-bottom: 1px ridge var(--color-border-light-tertiary);
        box-shadow: 0 5px 10px -8px #000;
        padding: 0.25rem;
        margin: 0.5rem 0;
      }
      div.read-out p {
        font-family: 'Roboto Condensed'; /* Change to 'Good OT' if you have that font available */
        font-size: 1.05em; /* using the x.xxem format means that your size changes scale with the default font size set by Foundry, but you can set this value to the height in pixels you want (e.g. 12px) or the percentage of the base font height (e.g. 105%) */
      }
      ```
* That code will apply some styling to make a box like the read out text sections from a Pathfinder adventure. If you want to increase the accuracy of the look, change the `font-family` from `'Gelasio'` to `'Good OT'`. Keep in mind you will need to have the Good OT font installed in order for that to work. For more info about getting that and other fonts see [Part 2, Step 2](#step-2-gather-fonts).
* Save your .css file and overwrite it to your Foundry directory, and then reload Foundry using F5. 
* Now open the journal you are editing, open the HTML view, and copy and paste the following code into the HTML editor:
    * ```html
      <div class="read-out">
          <p>Replace this text!</p>
      </div>
      ```
* Once you click save you should see that the \<div> was created with some text inside and is being styled according to the rules in your .css file.

## How did that work?
What we just did used a combination of HTML (Hypertext Markup Language) and a CSS (Cascading Style Sheet) file. We applied a “class” to the element using HTML, which told Foundry to apply the styling we wrote for that class in the CSS file to that element.

### The HTML Side

It's important to remember that most HTML elements have a beginning and an end. For example, a standard text element indicates the start of the element with a pair of angle brackets surrounding the letter p: \<p>. After that start indicator text can be typed freely until the text ends or a new paragraph starts. At that point HTML needs another pair of angle brackets with a forward slash before the letter p to indicate the end, like so: \</p>. If you use \<div> to start a container you need to make sure that at the end of the container you place a \</div> to indicate where the container ends. HTML will try to include these end brackets if you forget, but it may make mistakes if your end brackets are missing.

Here are some of the most common HTML elements I've used in Foundry:
* \<p> is the most common element, and it contains body text.
* \<h1>, \<h2>, and \<h3> are all headings, Foundry applies some rules to headings by default like increasing the font size and making the text bold, and applying an underline.
* \<hr> stands for horizontal rule, and is the element that creates a line that typically spreads across the whole page to divide two sections.
* \<img> is the element that points Foundry to a picture file and displays the picture. Foundry styles \<img> elements to have 1 pixel black border by default 😠
* \<div> is a common way of grouping content together and is short for division. \<div> elements are flexible and usually has no styling by default.
* \<figure> is a container that can house an \<img> element and a styled \<figcaption> element that gives the picture a title.
* \<table> is a group of rows and columns, if you've used Google Sheets or Microsoft Excel you likely know how this works.

### The CSS Side

We specifically wrote the CSS rule to only apply to \<div> elements, specifically \<div> elements that we assigned the “read-out” class via HTML, so that the rule doesn’t affect every \<div> element in Foundry. When using Visual Studio, you can hover over the first line of your rule with your cursor and it will tell you what elements it will affect. We did this using what is called the selector.

When writing rules in CSS, the first line is called the selector. The selector usually targets a specific HTML element, such as \<p>, and often specifies further to only target HTML elements with a given class. After the selector the start curly bracket "\{" indicates that what follows are the declarations (in other words the style rules) to apply to any elements that match the criteria of the selector. A declaration starts with a property, has a colon \(":"), and then has a value for that property. If there are multiple declarations the end of the line should also include a semi-colon to indicate that there are more declarations to follow. After the last declaration you indicate the end with an end curly bracket "\}".

CSS indicates items of a specific class using a period, and the text following the period should match the class name exactly, like so: `div.read-out`. You can add further specificity by adding other selectors separated by a space. Each element added this way will expect to be nested further beneath HTML elements, so `div.read-out p` will not apply to \<p> elements unless they nested are inside of a `<div class="read-out">`. You can also add additional selectors with commas, so if you want \<h2> and \<h3> elements to be styled the exact same you could write a selector like `h2, h3`.

Look at our previous CSS rule to see these techniques in action:
* ```css
   div.read-out p { /* This selector targets only <p> elements that are within a <div> container that has the class "read-out" */
     font-family: 'Roboto Condensed'; /* This declaration has set the value 'Roboto Condensed' to the property font-family */
     font-size: 1.05em; /* Similarly the font-size property has been set to a value of 1.05em, or about 5% larger than the standard font size */
   }
  ```

>[!NOTE]
>There are some properties like `margin` and `border` that can accept multiple values. `margin: 0` Sets the margin to 0 on all sides. `margin: 0 1px` will set the top and bottom margins to 0, but set the left and right margins to 1px. With more than two values the margin will be set in clockwise order, meaning `margin: 0 1px 2px 3px` will set the top margin to 0, the right margin to 1px, the bottom margin to 2px, and the left margin to 3px. Most elements that accept multiple values will have multiple varations, for example you could set only the left margin by using the property `margin-left`. Once again hovering your cursor over a property in VS Studio is your best friend, as the syntax that property will accept for values will be suggested.

I recommend using [W3Schools](https://www.w3schools.com) if you ever have questions about an HTML element or a CSS style rule, I’ve used that website countless times when I wanted to find out if an idea I had was possible.

## Step 3: Embedding an Image
* Now that you’ve written your first style rule, let’s write another. We are going to target a way to insert images into journal pages in a way that they don't take up the whole page. This is useful for portraits of NPCs, pictures of magic items, or pictures of faction symbols. We are going to use the \<figure>, \<figcaption>, and \<img> elements to accomplish this. The class we will give to these elements is "insert".
* Our first set of rules will target the \<figure> container, but we only want it to target \<figure> elements that we've assigned the "insert" class. To achieve this our selector will be `figure.insert {}`.
    * Set the `float` property to a value of `right`. This will make the the \<figure> container (and any items inside) appear on the right side of any other elements like paragraphs of text.
    * Set the `max-width` property to a value of `33%`. You can change that percentage value to be higher or lower, as written this keeps the \<figure> from taking up more than a third of the page.
    * Finally I like setting the `margin` property to a value of `0` so that the text surrounding the figure gets close to the image. You could even set the margin to a negative value if you really wanted the text to crowd in, but you would risk the text obscuring the image.
* Our next set of rules is for \<figcaption> elements that are inside of a \<figure> that has the class "insert". To achieve this our selector will be `figure.insert figcaption {}`. Foundry already makes the \<figcaption> text bold, italicizes it and centers the text inside of the container. For my purposes I want to change the font, make the text all capital letters, and undo the italicization:
    * Set the `font-family` to `'Gelasio'`, you can change this to any font you want that is installed in Foundry
    * Set `text-transform` to `uppercase` to make any text appear to be capitalized, even if you didn't type it that way
    * Set the `font-style` to `normal`, which removes the italicization
* Last but not least I want one rule that targets images inside of the \<figure>. To achieve this our selector will be `figure.insert img {}`. I want to remove the border that Foundry places around images by default
    * Set `border` to `none` or `0`.
* By the end your code should look something like this:
    * ```css
      figure.insert {
         float: right;
         max-width: 33%;
         margin: 0;
      }
      figure.insert figcaption {
         font-family: 'Gelasio';
         text-transform: uppercase;
         font-style: normal;
      }
      figure.insert img {
         border: 0;
      }
      ```
* Save your CSS file and overwrite your existing CSS file in your Foundry directory. Now all we need to do is write the HTML code in Foundry to match our CSS file.
   * To start I suggest inserting an image at the top of your journal page using Foundry's default text editor, that way you can find where the image is in your directory.
   * Open the HTML view and create a \<figure> and give it the class “insert”. Giving the \<figure> container a class means that all elements inside the container will also have that class.
   * Inside the \<figure>, you can copy and paste the \<img> you inserted at the top of the page.
   * Then we add a new \<figcaption> element below the image and type out the title of the image.
   * You should have some HTML code that looks similar to the following:
      * ```html
        <figure class="insert">
           <img src="icons/vtt-512.png"> <!-- You should replace the file path in quotes with the path for the image you want to use -->
           <figcaption>A Useful Caption</figcaption>
        </figure>
        ```
* Once you click the save icon your journal page should have the image displayed to the right of your body text and a nice little caption describing the image.

## Step 4: Side Box
* There's one more extremely common element from a Pathfinder adventure that you will come across, the side box. To recreate this using CSS you will need to combine some properties from the [Read Out](#step-2-read-out-box) and [Embedded Image](#step-3-embedding-an-image) rules we've already written. We want to copy the `float` and `max-width` elements from the Insert, and much of the style from the Read Out box.
   * ```css
     div.side-box {
        border-left: none;
        border-right: none;
        border-top: 1px ridge var(--color-border-light-tertiary); /* These borders will only appear on the top and bottom and will use a variable that comes with Foundry by default. You can change this to any other variable or just #000 if you want the borderd to be black*/
        border-bottom: 1px ridge var(--color-border-light-tertiary);
        background: rgba(0, 0, 0, 0.05); /* Side Boxes in Pathfinder often have a background so that they stand out from body text. You can set this to any color you like, I've set this one to the default color of a table in Foundry */
        float: right;
        max-width: 33%;
        margin: 0 0 1% 1%; /* This will make a small margin on the left and bottom sides of the box */
     }
     div.side-box p {
        font-family: 'Roboto Condensed'; /* Don't forget to switch this to Good OT if you have that font */
        font-size: 1.05em;
     }
     div.side-box p.header {
        font-family: 'Roboto Condensed';
        font-size: 1.2em;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
     }
     ```
   * One additional element I added here is the rules for `<p class="header">` elements inside the `<div class=read-out>`. I use this to adjust the top line of the box to have a larger font size and different font, without using an actual heading element like \<h3>. I do it this way because if you use a heading element (e.g. \<h3>), Foundry will list that heading on the sidebar of the journal, which I would not want in this case. If you would like the heading of the box to be an actual heading the adjustment would relatively simple:
      * ```css
        div.side-box h3 {
           font-family: 'Roboto Condensed';
           font-size: 1.2em;
           font-weight: bold;
           text-transform: uppercase;
           text-align: center;
        }
        ```
* Once you’ve saved your .css file and overwritten that file in Foundry and reloaded Foundry you are ready to write the code in HTML:
   * ```html
     <div class="side-box">
        <p class="header">This is a Title!</p>
        <p>This is body text</p>
     </div>
     ```
This should be enough for you to start writing your own CSS rules. The following sections Part 2 and Part 3 will dive deeper into getting your rules even close to the actual Pathfinder adventures using Fonts and colors

# Part 2: Fine Details
In this section I will go into detail on how to gather fonts and exact colors to use in your journals. Because you've followed the previous steps in the guide there will be less explanation of why to do things a certain way and more explanation of how to do them. Where possible I will refer back to previous sections in Part 1.

## Step 1: Study an Official Module
* Rule 1 of Foundry is that the official module devs are smarter and cooler than you. They've done the hard work and may have a professtional backround in frontend web development. Instead of you getting that education, I encourage you to study how they are able to get the effects that you want to achieve.
* With an official module installed, you can open up your Foundry directory, navigate to the module’s folder and get the .css file the module uses. Opening this file in Visual Studio can be overwhelming, but there’s a lot to learn from these files. One important thing you can learn is the name of specific properties that can be used, like `font-size`, `font-family`, or `text-transform`. While you certainly can copy and paste rules from this .css file for your own use, I find that understand the rules I won't apply them correctly to my own file.
* Another method of study is to inspect the module journals in Foundry. You can press F12 to change the CSS in real time and learn how the official module accomplishes what it does.
* Click the element picker in the console window to inspect the part of the journal you want to look at. This works similarly in Firefox as well.
* Once selected the element will appear in the “Elements” breakdown and we can see under “Styles” what style rules are being applied to that element. You can use the checkboxes to play around and turn rules off and on, or edit them directly.
* It’s certainly possible to make your own .css file without using a module as a guide, but you’ll have to work a lot harder.

## Step 2: Gather Fonts
* An additional benefit of having an official module as a guide is that you should have some of the officialy font files available in the module directory. You can copy these files into your own CSS folder. If you want your journal to look as good as possible you will want these font files.
* Pathfinder 2e typically uses the following fonts:
   * Body text uses Sabon Light Standard Roman (Gelasio is a pretty solid alternative that comes with the Pathfinder 2e system by default)
   * Headings use Good OT Bold (Roboto Condensed Bold is a good alternative that)
   * Read aloud and side boxes use Good OT (Roboto Condensed is a good alternative)
   * Headings for items and stat blocks use Good OT Condensed Bold
   * Specific adventures often have a unique font for top level headings, but you can usually find these out using [fontfinder](https://www.myfonts.com/pages/whatthefont/).
      * I myself have found the title fonts for Crown of the Kobold King (You Are Loved), Troubles in Otari (Alembic Beta) and Headshot the Rot (Roadkill Heavy) using this website.
* Once you have a font file, place it in your CSS folder, and then install it in Foundry under the core settings. You will want to keep the file path so you can add the fonts to your css file
* At the top of your .css file you can list any fonts you plan to use. This directs your style rules to what fonts you mean and where the files are in your directory. Start with “@font-face {”, listing the font-family (the name), the source url (where the file is), and whether the file is an opentype font or truetype. You can determine this by looking at the file format of the font you are using.
   * ```css
     /* Custom Fonts */
     @font-face {
        font-family: "font-name"; /* Replace the font-name with the name of the font you want to use */
        src: url("assets/CSS/Fonts/example-font.otf") format('opentype'); /* Change the file path in the url to the correct path for your directory and make sure the format is correct for the file type */
     }
     ```

## Step 3: Getting Exact Colors
* To find the hexcodes of colors that you want, open the adventure PDF in Firefox, and zoom in on the text you want to get the color of. 
* Press F12 to pull up the console, and click the eyedropper to find the hex codes of any color you hover over. It’s possible that you can do this in Google Chrome but I couldn’t find a way that was as quick as using Firefox.
* Record the Hex Code in any text file, eventually you will make a list of colors in your .css file. I keep a journal entry with HTML templates in it, and have a page that shows the different colors that I’ve extracted.

# Part 3: Adventure Specific Changes
Now that you have the fonts and colors, you really have everything you need to start sprucing up your journals and make them look like the actual PDFs. For the following part, I will show you how to flag your journals to use only the rules you write for that adventure, and then go over some of the common changes I make to text like headings. This process is different depending on whether you are using v13 and World Scripter or v14 with your own module
  
## Step 1: Adjusting your .mjs file
* Open your .mjs file in Visual Studio and add the following code.
  * ```javascript
    Hooks.on("renderJournalEntrySheet", (app) => {
      if (app.document.getFlag("core", "isXXX")) { 
        app.element?.classList?.add("xxx"); //Change the xxx and XXX to the abbreviation for the title of the adventure you are adapting, ex. Fists of the Ruby Phoenix becomes FOTRP and fotrp
      }
    });
    ```

## Step 2: Adding Flags to Journals
* Next you will want to export the .json files of the Journal Entries you are including in this adventure. At this point you should make a copy of those files **and never delete it**. It is easy to overwrite the wrong journal and lose hours of work when importing these files back into Foundry. I recommend having one folder for backup and one folder for current.
>[!CAUTION]
>I am NOT kidding, you should make a back up of any .json file before you import them back into Foundry, ESPECIALLY if you've already started editing the text
* With the exported .json files, open each .json file in Visual Studio
* We need to add a very small bit of code to each file. We are placing this code under the main “flags” entry, be sure not to put it under one of the individual page. The easiest way to get to the right spot is to collapse the “pages” range on the left, and the correct “flags” section should be right after the “pages”.
* Paste the following code inside the “flags” bracket. You will need to change the XXX to the abbreviation you wrote for the World Scripter code. Do this to each .json and save each one in your “Current” folder.
    * ```json
       
          "core": {
            "isXXX": true
          }
        
      ```
* In Foundry, import the .json files for each respective journal, being extremely careful that you choose the correct file for each journal.

## Step 3: Write a list of Variables for Adventure fonts and colors
* Next we will list some variables. These make it so that if you make a mistake you only need to correct that mistake in one location, instead of all over the code.
* Create a new rule for elements with the class we gave to those journals, in our case `.tio`. Make sure you include the period. Under this class we are going to name a variable and give it a value, in this case we want to get the color of the read out text. We will call it `--tio-green-darkest`, and for the value use the hex code of the color. See [Part 2, step 3](#step-3-getting-exact-colors) for more info on gathering color hexcodes.
   * ```css
     .tio {
        --tio-green-darkest: #004316;
     }
     ```
* I recommend listing all the colors that are used by the text of your adventure under this rule. Additionally, any fonts that the adventure uses that are different from your baseline CSS can be listed as variables. As I went through Troubles in Otari, my list of variables ended up like this:
   * ```css
      .tio {
        --tio-green-darkest: #004316;
        --tio-green-darker: #306137;
        --tio-green-light: #6c8a6a;
        --tio-red-light: #953345;
        --tio-red-dark: #5d0000;
        --tio-white-off: #e9e5df;
        --tio-gray: #57585b;
        --tio-h1-font: 'Alembic Beta';
      }   
     ```

## Step 4: Write Style rules specific to the adventure
* Next we are going to write some new rules to use this variable, starting with the Read Out box from [Part 1, step 2](#step-2-read-out-box) We will need one for the \<div> and one for paragraphs (\<p>) inside the \<div>. Each rule needs to start with the class we assigned earlier, in our case .tio. You can copy the border rules we made earlier and remove the listed variable and replace it with `#000`, which is just black. Additionally, we will make a similar rule to change the color of the paragraph text to our new variable `--tio-red-light`. Using a variable instead of a hex code is as simple as typing `var()` and copying and pasting the name of the variable into the parentheses.
   * ```css
     .tio div.read-out {
        border-top: 1px ridge #000;
        border-bottom: 1px ridge #000;
     }
     .tio div.read-out p {
        color: var(--tio-red-light);
     }
     ```
* Reload Foundry and see the changes have taken place
* The beauty of writing your .css file this way is you can make a specific style for an adventure, and have that style only apply to the journals you’ve flagged as needing them. The rest of Foundry and your other journals will not be affected. Additionally, because of how we applied that class, you can change how the headings appear in your Journals as well, which is otherwise difficult to do.

## Step 5: Adventure Specific Headings
* Because we applied a class to the journal entry we can write rules that would normally be too general and would conflict with other styles in Foundry. The biggest example of this is likely headings, which are used all over Foundry. We can target the headings that appear in our journals and change them too match the aesthetic of the adventure.
   * ```css
     .tio h1, .tio h2, .tio h3 {
       border: none;
       margin: 0.05em 0 0;
       text-transform: uppercase;
       overflow: hidden;
       padding-top: 0.2em;
     }
     .tio h1 {
       color: var(--tio-green-darkest);
       font-family: var(--tio-h1-font);
       font-size: 2em;
       text-align: center;
     }
     .tio h2 {
       color: var(--tio-green-darker);
       font-family: var(--tio-h1-font);
       font-size: 1.6em;
     }
     .tio h3 {
       color: var(--tio-green-light);
       font-family: 'Good OT Bold';
       font-size: 1.4em;
     }
     ```
* With these rules in place, whenever you use \<h1>, \<h2>, or \<h3> in a journal that you gave the flag .tio, that heading will be styled to match the adventure. This will work even on the top heading of a journal page, and you can adjust the level of each page using the default Foundry journal editor to get the heading correct.

# Part 4: Adding Foundry Automation
* In Pathfinder 2e we have some baseline automation that can be achieved to make running the game as smooth as possible. We are going to automate some checks, some actions, and some other miscellaneous rolls.
* Your best resource is the [Pathfinder 2e Foundry VTT System wiki](https://github.com/foundryvtt/pf2e/wiki)

## Step 1: Inline Rolls
* Opening up this journal page, we can see some DCs, and some capitalized words that indicate that a specific action is being called for. This one says “Balance,” which is an action the player characters can take. To automate this we will use /act, surrounded by double brackets. Then we add the dc by typing dc equals 19. Make sure you use all lowercase when typing out the name of the action.
   * Your final text in the editor should like something like this:
     ```
     [[/act balance dc=19]]
     ```
* Hit save and you will see we now have an inline link that can be sent to the chat when needed if one of your players has their character do that action. The benefit of using this method is that if an action always uses a blind roll or has certain traits that a player might use to get a benefit these are automatically applied. This makes it faster to check if there might be a rule conflict by hovering over the trait, for example checking if an action has the concentration trait.
* Be careful of actions that are longer than one word, you will need to connect each word together with a dash in order for the system to recognize the action. Some actions will require you to specify a skill in order to work, like Recall Knowledge. To specify the skill you use the same formatting as the dc, type skill, the equal sign, and then the name of the skill.
   * ```
     [[/act recall-knowledge dc=15 skill=Arcana]]
     ```
* For some skill checks there is no associated action, an adventure might simply have a player make a skill check without suggesting a specific action. In that case you can write an inline check like so:
   * ```
     @Check[Stealth|dc:15]
     ```
   * Note that elements of the check are separated by the | symbol, and that you use a colon instead of an equal sign. You can still manually add traits to the check, like making it a secret check. You simply add a separator | after the dc, type "traits:", and can add traits separated by commas. You can even replace the name of the roll by adjoining text in curly brackets after the standard brackets.
   * ```
     @Check[Stealth|dc:15|traits:move,secret]{Roll Stealth or Die on Your Knees!}
     ```
* Another inline roll that comes up often is damage, like when an adventure describes a simple trap. For this I prefer to use @Damage, it has the most robust functionality. You type @Damage and then a pair of standard brackets. Inside list the dice to roll, and after the dice have additional set of brackets to set the type of damage.
   * ```
     @Damage[8d6[fire]]
     ```
## Step 2: Linking Items and Locations in Journals
* Another handy tip is to link journal pages together, here the adventure references A2, which is another location that has a journal page. After highlighting the text you can drag that journal page onto that text to create a link.
* For items, conditions, creatures, spells, actions, and hazards, you will want to press the magic wand in the journal editor and highlight the text. Foundry will try to match the selected text with something from the pathfinder compendiums. For better precision, you can open the compendium browser, search for the item, and drag the item from the compendium onto your highlighted text. You can also drag and drop from your downloaded items and creatures, but be aware that if there are bugfixes or changes to that item you won't get them, and that if you delete the item from your foundry world the link will be broken.
