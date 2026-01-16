---
title: "Building Secure APIs from Scratch"
date: "2025-11-20"
excerpt: "A comprehensive guide to implementing authentication, authorization, and input validation."
tags: ["Backend", "API Security", "Node.js"]
author: "Vishnu Vardhan Burri"
---

# Building Secure APIs from Scratch

API security is often an afterthought, but it should be the foundation of any backend system. Having built dozens of production APIs, I've learned that security must be baked in from day one.

## Authentication Done Right

Start with proper authentication:

```javascript
// JWT with short expiration and refresh token rotation
const token = jwt.sign(
  { userId, role },
  process.env.JWT_SECRET,
  { expiresIn: '15m' }
);
```

Key principles:
- **Short-lived access tokens** (15-30 minutes max)
- **Refresh token rotation** on every use
- **Secure token storage** (httpOnly cookies, not localStorage)

## Role-Based Access Control

Implement RBAC at the middleware level:

```javascript
const authorize = (requiredRoles) => (req, res, next) => {
  if (!requiredRoles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};
```

## Input Validation

Never trust user input. Validate everything:

```javascript
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
  name: z.string().min(2).max(100),
});
```

## The Monitoring Layer

Security without visibility is useless:

1. **Rate Limiting**: Prevent abuse and DDoS
2. **Request Logging**: Full audit trail
3. **Anomaly Detection**: Alert on suspicious patterns

## Testing Your Defenses

Regular penetration testing ensures your defenses hold up:

- Automated security scans in CI/CD
- Quarterly manual penetration tests
- Bug bounty program for continuous testing

---

*Security is a process, not a product.*
