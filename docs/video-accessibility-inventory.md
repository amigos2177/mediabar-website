# Video Caption and Transcript Inventory

Audit date: July 19, 2026

This inventory covers the 25 unique videos visibly embedded on the public Media Bar
website. Caption status was checked against each public Vimeo embed response,
Vimeo's signed-in Languages panel, and YouTube's public timed-text track list.

## Coverage summary

| Status | Videos |
| --- | ---: |
| Vimeo with auto-generated English captions | 13 |
| Vimeo with no caption track detected | 7 |
| YouTube with no public caption track detected | 5 |
| Human-authored caption tracks detected | 0 |
| Dedicated watch pages with an on-page transcript | 0 of 12 |

Six Vimeo videos that blocked public metadata access were verified while signed in
to the Media Bar account. Five now have Vimeo AI subtitles. The demo reel still has
no track because Vimeo continues to report that no speech was detected.

## Asset inventory

| Priority | Platform | ID | Video | Public placement | Caption status |
| --- | --- | --- | --- | --- | --- |
| P0 | Vimeo | `1193317757` | San Antonio Production Stories | Corporate service, Work, watch page | English auto-generated |
| P0 | Vimeo | `1180540188` | Wound Local Patient Story | Medical service, Work, watch page | English auto-generated |
| P0 | Vimeo | `1180537582` | Sanctuary Wealth Interview | Work, watch page | English auto-generated |
| P0 | Vimeo | `697230305` | Healthcare Provider Story | Work, watch page | No public track detected |
| P0 | Vimeo | `298919239` | Interview Video Production San Antonio | Interview service | English AI-generated; source reports zero audio channels, so verify track content |
| P0 | Vimeo | `666115814` | ST Engineering Brand Film | Work, watch page | English AI-generated |
| P0 | YouTube | `cQHqvEHFx2M` | We Go Beyond Banking | RBFCU case study | No public track detected |
| P0 | YouTube | `M44en_QEBlQ` | RBFCU Finances the Miles That Matter | RBFCU case study | No public track detected |
| P0 | YouTube | `AT59Z4LIu8Y` | Generations of Trust at RBFCU | RBFCU case study | No public track detected |
| P0 | YouTube | `hpHKrVXhWnY` | Experience More with Every Purchase | RBFCU case study | No public track detected |
| P0 | YouTube | `CuJdvSJ9bAE` | From First Steps to Forever Memories | RBFCU case study | No public track detected |
| P1 | Vimeo | `1180537228` | ATMA Testimonial Brand Marketing | Aerial service | English auto-generated |
| P1 | Vimeo | `1180540550` | Eli Ortiz Specialty Care | Work, watch page | English auto-generated |
| P1 | Vimeo | `1056208254` | Texas Recycles Day | Work, watch page | English auto-generated |
| P1 | Vimeo | `946447253` | NAFA Conference Recap | Events service, Work, watch page | No public track detected |
| P1 | Vimeo | `1077104073` | 2025 Corporate Video Demo Reel | Homepage, Work, post-production | No track; English (US) set; Vimeo reported no speech detected |
| P1 | Vimeo | `1138375371` | RBFCU Coyote | Commercials service, Work, watch page | English AI-generated |
| P1 | Vimeo | `1138383811` | Real Estate Video Production | Real estate service | No public track detected |
| P2 | Vimeo | `1203197473` | Commercials Reel | Homepage | No public track detected |
| P2 | Vimeo | `1180540292` | Boot Ranch Golf Commercial | Aerial, real estate, Work, watch page | English auto-generated |
| P2 | Vimeo | `1180540640` | Fleer Brilliants Superman | Motion graphics, Work, watch page | English auto-generated |
| P2 | Vimeo | `697231773` | Tostadas de Chicharron | Food service, Work, watch page | No public track detected |
| P2 | Vimeo | `298056449` | Kiolbassa Food Commercial | Food service | English AI-generated; source reports zero audio channels, so verify track content |
| P2 | Vimeo | `697232139` | Chicharron Poblano | Food service | No public track detected |
| P2 | Vimeo | `358864530` | Riblets in Red Sauce with Cactus | Food service | English AI-generated |

## Recommended remediation order

### Batch 1: spoken stories on conversion pages

1. Human-review the Vimeo auto-captions for San Antonio Production Stories.
2. Human-review the Wound Local Patient Story with extra care for names and
   healthcare terminology.
3. Verify whether the Interview Video Production AI track contains usable captions.
   The uploaded source reports zero audio channels.
4. Caption the Healthcare Provider Story.
5. Human-review the ST Engineering Brand Film AI subtitles.

These assets contain the strongest spoken-story content and appear on service or
portfolio pages that help prospective clients evaluate Media Bar.

### Batch 2: campaign and testimonial proof

1. Add reviewed captions to all five RBFCU YouTube spots, preferably from the
   approved broadcast scripts.
2. Human-review the ATMA Testimonial, Eli Ortiz Specialty Care, and Texas Recycles
   Day auto-captions.
3. Human-review the RBFCU Coyote AI subtitles.
4. Upload a reviewed caption file for the demo reel. Vimeo continued to report that
   no speech was detected after the language was reconfirmed and transcription was
   retried.

### Batch 3: primarily visual work

Caption the remaining commercials, food videos, event recaps, motion graphics, and
real-estate work when they contain spoken dialogue, voiceover, or meaningful
on-screen text. Music-only reels should still receive a short descriptive transcript
or accessible summary when the visuals communicate information.

## Website implementation

The watch-page template already supports transcripts through the `transcript` field
in `data/work-projects.ts`. Once a transcript is reviewed:

1. Upload the matching reviewed VTT or SRT file to Vimeo or YouTube.
2. Add the reviewed transcript paragraphs to the matching work project.
3. Keep names, brands, medical terminology, numbers, and calls to action consistent
   with the approved master.
4. Do not publish raw auto-generated text without a human review.

For service-page videos that do not have a dedicated watch page, keep captions in the
hosting platform and add an on-page transcript only when the spoken content materially
helps users or search engines understand the work.

## Inputs needed

- Approved scripts or caption files for the five RBFCU spots.
- An approved script or caption file for the demo reel.
- Source files with audio, scripts, or caption files for the Interview and Kiolbassa
  videos if their new AI tracks are empty.
- Human confirmation of names, technical terms, and brand language in patient,
  executive, and testimonial videos.
