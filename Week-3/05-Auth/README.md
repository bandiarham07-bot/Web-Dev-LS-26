# Auth: JWT & OAuth — Securing Your API

[Home](../../README.md) > [Week 3](../README.md) > Auth: JWT & OAuth

> Week 3 · Topic 5 of 6 · Prerequisites: [Django REST Framework](../04-REST-APIs/README.md), [Backend Foundations](../01-Backend-Foundations/README.md) (HTTPS section)

---

## Why This Topic

Your API works — but it has no idea *who* is calling it. Anyone with the URL can hit any endpoint. Before you connect a real React frontend to this backend (Topic 6), you need a way to say "this request is from a logged-in user, and here's what they're allowed to do."

Users hate filling out registration forms. "Login with Google" removes that friction entirely — one click, Google confirms identity, your app gets a verified email. OAuth 2.0 is the protocol that makes this safe to do, and Django Allauth implements it so you don't have to build the handshake yourself.

---

## Learning Path for This Topic

```
1. What is a JWT, structurally?
        |
        v
2. Why JWT over Django's default session auth, for an API specifically
        |
        v
3. Hands-on: install SimpleJWT, configure token endpoints, protect a view with IsAuthenticated
        |
        v
4. (Optional but recommended) What is OAuth, and why "Login with Google" removes friction
```

---

## Resources

**Watch first (conceptual):**
- [What is JWT? JSON Web Tokens Explained](https://www.youtube.com/watch?v=Y2H3DXDeS3Q) — Explains what a JWT is, how it's structured, and how verification works *without* a database lookup.
  
**Watch (implementation):**
- [JWT Authentication with Django REST Framework — Full Tutorial](https://www.youtube.com/watch?v=PUzgZrS_piQ) — Full walkthrough of JWT in DRF

**Read:**
- [JWT Authentication with Django REST Framework — TestDriven.io](https://testdriven.io/blog/django-rest-auth/) — The best written guide for setting up SimpleJWT with DRF. **Recommended**

**OAuth / Social Login (Optional):**
- [Django Allauth — Official Documentation](https://django-allauth.readthedocs.io/en/latest/) — Covers setup, social providers (Google, GitHub, Apple), and DRF integration. If you want to add the option of Login thorugh external social providers

---

## Extra Resources

- Now that you are done with both the fronetend and the backend part of Web Development you can start building locally run [Full Stack projects](https://www.youtube.com/watch?v=MYPKZmb2CAg). This is a 6 hour project tutorial covering all the topics we have learnt till now and will help you in connecting React with Django. 

- If you just want to learn how to connect your React App with Django read [this](https://www.geeksforgeeks.org/reactjs/integrating-django-with-reactjs-using-django-rest-framework/). It is a tutorial in the form of a very small project.

---

[Previous: Django REST Framework](../04-REST-APIs/README.md) | [Week 3 Overview](../README.md) | [Next: Assignment](../06-Assignment-3/README.md)
