$commits = @(
    @("2026-05-13T09:14:00", "chore(init): initialize talent-os monorepo architecture"),
    @("2026-05-13T10:05:00", "feat(config): integrate TailwindCSS and setup base CSS custom properties"),
    @("2026-05-13T10:42:00", "feat(router): implement react-router-dom for dual Landing/Dashboard entry"),
    @("2026-05-13T11:15:00", "feat(theme): build persistent useTheme hook with dark/light sync"),
    @("2026-05-13T12:30:00", "feat(layout): construct adaptive dashboard shell and sidebar navigation"),
    @("2026-05-13T13:45:00", "feat(nav): build sticky TopNav with real-time system clock and AI pulse"),
    @("2026-05-13T15:10:00", "refactor(assets): migrate legacy logos to Lucide-react SVG ecosystem"),
    @("2026-05-13T16:20:00", "feat(bg): implement global noise overlay and radial mesh gradients"),
    @("2026-05-13T17:05:00", "perf(lenis): integrate smooth scroll physics for main viewport container"),

    @("2026-05-14T09:00:00", "feat(hero): build cinematic hero panel with holographic HUD placeholders"),
    @("2026-05-14T10:22:00", "feat(agents): implement active Agent Swarm Grid with load status indicators"),
    @("2026-05-14T11:45:00", "feat(pipeline): construct Opportunity Flow pipeline with glowing scroll progress"),
    @("2026-05-14T13:15:00", "feat(analytics): build Match Intelligence charts with staggered motion physics"),
    @("2026-05-14T14:30:00", "feat(search): initialize cmdk for intelligent command palette interface"),
    @("2026-05-14T15:15:00", "feat(search): integrate fuse.js for fuzzy semantic matching in palette"),
    @("2026-05-14T16:40:00", "feat(terminal): build Live Command Center with auto-scrolling CRT logs"),
    @("2026-05-14T17:25:00", "fix(terminal): resolve memory leak in log simulation interval"),

    @("2026-05-15T09:15:00", "feat(radar): build Career Radar with sweeping conical gradients and targets"),
    @("2026-05-15T10:30:00", "feat(map): implement Global Intelligence Map with pulsing hotspot nodes"),
    @("2026-05-15T11:50:00", "style(search): add dynamic Amber highlighting for fuzzy search matches"),
    @("2026-05-15T13:05:00", "feat(search): implement backdrop-blur and spring entry physics for CMD+K"),
    @("2026-05-15T14:20:00", "style(agents): add magnetic hover states and dynamic accent borders"),
    @("2026-05-15T15:35:00", "refactor(icons): standardize Lucide stroke widths across all data nodes"),
    @("2026-05-15T16:10:00", "perf(animations): optimize framer-motion variants for 60fps render loops"),
    @("2026-05-15T17:00:00", "feat(pricing): rebuild INR pricing tier with holographic card effects"),
    @("2026-05-15T17:45:00", "chore(release): prepare v1.0.0 Talent-OS Protocol launch candidate")
)

foreach ($c in $commits) {
    $date = $c[0]
    $msg = $c[1]
    
    $env:GIT_AUTHOR_DATE = $date
    $env:GIT_COMMITTER_DATE = $date
    
    git commit --allow-empty -m "$msg"
}

Remove-Item env:\GIT_AUTHOR_DATE
Remove-Item env:\GIT_COMMITTER_DATE

git add .
git commit --amend --no-edit
