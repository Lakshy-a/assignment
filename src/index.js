import {  app } from './app.js';

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// start();