# Week 3 Assignment - Django Unchained???

---

## Brief

Let's address the elephant in the room: yes, this assignment is named after the Tarantino movie. Every time I use django I am reminded of that movie (especially the memes associated with it). No, you don't need to have seen it to solve this assignment but if you haven't well


<img width="220" height="220" align = 'center' alt="leonardo-leonardo-dicaprio" src="https://github.com/user-attachments/assets/0844d755-6805-414c-8ee2-092d3024d9a8" />


---
So welcome to the **Wild West**. You're building the record-keeping system for a frontier town — a bounty board, a saloon's ledger, or a stagecoach line's cargo manifest. Outlaws, cheats, and bandits are out there, and they *will* come looking for a way in.
 
**This assignment has two phases:**
 
1. **You build a REST API** themed around the Wild West (pick one of the three approved concepts below).
2. **We come riding in to test it.** After submission, your API will be run locally and put through a fixed set of test categories — access control, malformed/hostile input, request bursts, and information leaks. How you defend your town is up to you.

You're graded on **what you understood well enough to defend**, and **how creatively you approached both your frontier concept and your defenses.**

---

## Pick Your Frontier

Choose **one** of the following three concepts. All three map onto the *exact same* required API shape (see below) — only the story and field meanings change.

| Concept | The Setup | What a "Bounty" represents here |
|---|---|---|
| 🎯 **Bounty Board** | You run the town's bounty office. Outlaws get put up on the board with a reward for whoever brings them in. | A literal bounty: an outlaw's name, the reward on their head, and whether they're still `wanted` or already `captured`. |
| 🥃 **Saloon Ledger** | You keep the books at the only saloon in town. Regulars run up tabs, and the owner wants to know who owes what. | A tab: the patron's name, the amount owed (the "reward" for collecting the debt), and whether it's `wanted` (unpaid) or `captured` (settled). |
| 🚂 **Stagecoach Manifest** | You run logistics for the stagecoach line, tracking valuable cargo between towns, some of which gets targeted by raiders. | A shipment: what's being moved, its declared value (the "reward" if lost/stolen and recovered), and whether it's `wanted` (in transit, at risk) or `captured` (delivered safely). |

Pick whichever story you like best

---

## Required API Shape

So every submission can be tested the same way, your API **must** expose exactly the following endpoints:

| Method | Path | Behavior |
|---|---|---|
| `POST` | `/api/auth/register/` | Create a new user. Expects at least `username` and `password`. |
| `POST` | `/api/auth/login/` | Returns a JWT `access` and `refresh` token pair for valid credentials. |
| `POST` | `/api/auth/refresh/` | Exchanges a valid `refresh` token for a new `access` token. |
| `GET` | `/api/bounties/` | List bounties belonging to the requesting user. Requires auth. |
| `POST` | `/api/bounties/` | Create a new bounty, owned by the requesting user. Requires auth. |
| `GET` | `/api/bounties/<id>/` | Retrieve a single bounty. Requires auth + ownership. |
| `PUT`/`PATCH` | `/api/bounties/<id>/` | Update a single bounty. Requires auth + ownership. |
| `DELETE` | `/api/bounties/<id>/` | Delete a single bounty. Requires auth + ownership. |

Each **bounty** object must contain at least these fields (rename the *labels* in your own UI/README if you like for flavor, but the JSON keys below must exist exactly as written):

```json
{
  "id": 1,
  "target_name": "string — the outlaw / debtor / cargo description",
  "reward": "number — the bounty / tab amount / declared value",
  "status": "string — either 'wanted' or 'captured'",
  "owner": "implicit — must always resolve to the requesting user, never another user's bounty"
}
```

You're free to add more fields beyond these (a description, a location, a danger level — get creative), but `target_name`, `reward`, and `status` must exist with those exact key names.

**"Requires auth + ownership"** means: a logged-in user should never be able to read, edit, or delete another user's bounties, even if they guess or increment the ID. In Wild West terms — just because you know the bounty office's filing number for someone else's claim doesn't mean you get to walk in and cash it.

Your project must run locally on localhost with the command:

```bash
python manage.py runserver
```

No Docker, no extra services required to boot it (you're welcome to use caching internally — see below — but the server must start without anything extra running). We will run this command ourselves on your submitted code, so make sure a fresh clone + `pip install -r requirements.txt` + `migrate` + `runserver` is all it takes.

---

## Bonus (Optional, High Creativity Credit)

These are not required, but attempting them — even partially or imperfectly — earns strong creativity points, since it shows you went looking for solutions beyond the lecture material:

- **Rate limiting** — Throttle how often a user/IP can hit your endpoints. DRF has built-in throttle classes; you're free to use them or build your own logic.
- **Caching** — Cache a read-heavy endpoint (like your bounty list view) so repeated requests don't keep hitting the database. Bonus points if your cache correctly *invalidates* when the underlying data changes.

We will specifically check whether a cache exists and whether it's correct (serves fresh data after writes) if you claim to have implemented one.

---

## What to Submit

A **public GitHub repository** with the following structure:

```
your-rollno-django-unchained/
├── manage.py
├── requirements.txt
├── <your_project_folder>/
│   ├── settings.py
│   └── ...
├── <your_app_folder>/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── ...
└── README.md          ← Your design doc (see below)
```

### Your README must include:

1. **Which frontier you picked** — Bounty Board, Saloon Ledger, or Stagecoach Manifest
2. **Anything from the Bonus section you attempted**, and how it works.

**Rules:**
- Django + Django REST Framework + `djangorestframework-simplejwt` (or equivalent JWT library). No restrictions beyond that on additional packages.
- SQLite is fine — you don't need Postgres for this assignment.
- The exact endpoint paths and the three required field names (`target_name`, `reward`, `status`) above are non-negotiable. Everything else about your implementation is your choice.

---

[Previous: Auth](../05-Auth/README.md) | [Week 3 Overview](../README.md)
