// Initialize Lucide icons - include only the icons you need

import { createIcons, Sun, Moon, Search, UserRound, SendHorizontal, Globe, ArrowRight, ArrowLeft, Share2, LogOut, Tag, Calendar, Clock, Copy, CheckCheck } from 'lucide';

export function initIcons() {
  createIcons({
    icons: {
      Sun,
      Moon,
      Search,
      UserRound,
      SendHorizontal,
      Globe,
      ArrowRight,
      ArrowLeft,
      Share2,
      LogOut,
      Tag,
      Calendar,
      Clock,
      Copy,
      CheckCheck
    }
  });
}

// Auto-initialize icons
initIcons();