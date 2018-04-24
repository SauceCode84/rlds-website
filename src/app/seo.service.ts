import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable()
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  generateTags(tags?) {
    // default values
    tags = {
      title: "Rosslynne Lynch Dance Studio",
      description: "We are a professional Dance studio based in Krugersdorp, Johannesburg. We are affiliated with The Royal Academy of Dance in London and participate in annual examinations. We also participate in the Roodepoort Dance Festival every year which is held at the Pro-Musica Theatre in Roodepoort.",
      keywords: [
        "Rosslynne Lynch Dance Studio",
        "dance studio",
        "ballet studio",
        "dance",
        "Royal Academy of Dance",
        "Krugersdorp",
        "West Rand"
      ],
      image: "/assets/rldslogo.png",
      slug: "",
      ...tags
    };

    // set title
    this.title.setTitle(tags.title);

    // set meta tags
    this.meta.updateTag({ name: "description", content: tags.description });
    this.meta.updateTag({ name: "keywords", content: tags.keywords.join(", ") });

    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    //this.meta.updateTag({ name: "twitter:site", content: "@angularfirebase" });
    this.meta.updateTag({ name: "twitter:title", content: tags.title });
    this.meta.updateTag({ name: "twitter:description", content: tags.description });
    this.meta.updateTag({ name: "twitter:image", content: tags.image });

    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:site_name", content: "Rosslynne Lynch Dance Studio" });
    this.meta.updateTag({ property: "og:title", content: tags.title });
    this.meta.updateTag({ property: "og:description", content: tags.description });
    this.meta.updateTag({ property: "og:image", content: tags.image });
    this.meta.updateTag({ property: "og:url", content: `http://rldancestudio.co.za/${tags.slug}` });
  }

}
