'use client'

export default function DesignSystemShowcase() {
  return (
    <div className="bg-background min-h-screen py-5xl">
      <div className="max-w-5xl mx-auto px-lg space-y-5xl">
        {/* Header */}
        <div className="text-center mb-5xl border-b border-accent/10 pb-5xl">
          <h1 className="text-5xl font-bold text-text-primary mb-lg">Design System Showcase</h1>
          <p className="text-xl text-text-secondary">MegaWebCreations - Production-Ready Components</p>
        </div>

        {/* Color Palette */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Color Palette</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-lg">
            {[
              { name: 'Accent', color: '#00d9ff', class: 'bg-accent' },
              { name: 'Purple', color: '#7c3aed', class: 'bg-purple' },
              { name: 'Success', color: '#10b981', class: 'bg-success' },
              { name: 'Warning', color: '#f59e0b', class: 'bg-warning' },
              { name: 'Error', color: '#ef4444', class: 'bg-error' },
              { name: 'Info', color: '#3b82f6', class: 'bg-info' },
              { name: 'BG Light', color: '#1a1f3a', class: 'bg-bg-light' },
              { name: 'BG Elevated', color: '#242d47', class: 'bg-bg-elevated' },
            ].map((item) => (
              <div key={item.name} className="space-y-md">
                <div className={`${item.class} rounded-lg h-24 border border-accent/20`}></div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{item.name}</p>
                  <p className="text-xs text-text-tertiary font-mono">{item.color}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Buttons</h2>
          <div className="space-y-2xl">
            {/* Primary */}
            <div>
              <p className="text-sm font-semibold text-text-tertiary mb-lg uppercase">Primary Button</p>
              <div className="flex flex-wrap gap-lg">
                <button className="px-lg py-md bg-gradient-accent text-inverse font-semibold rounded-md hover:shadow-glow-md transition-all duration-fast">
                  Primary
                </button>
                <button className="px-lg py-md bg-gradient-accent text-inverse font-semibold rounded-md hover:shadow-glow-md transition-all duration-fast opacity-50 cursor-not-allowed">
                  Disabled
                </button>
              </div>
            </div>

            {/* Secondary */}
            <div>
              <p className="text-sm font-semibold text-text-tertiary mb-lg uppercase">Secondary Button</p>
              <div className="flex flex-wrap gap-lg">
                <button className="px-lg py-md border-2 border-accent text-accent font-semibold rounded-md hover:bg-accent/10 transition-all duration-fast">
                  Secondary
                </button>
                <button className="px-lg py-md border-2 border-accent text-accent font-semibold rounded-md hover:bg-accent/10 transition-all duration-fast opacity-50 cursor-not-allowed">
                  Disabled
                </button>
              </div>
            </div>

            {/* Ghost */}
            <div>
              <p className="text-sm font-semibold text-text-tertiary mb-lg uppercase">Ghost Button</p>
              <div className="flex flex-wrap gap-lg">
                <button className="px-lg py-md text-text-primary hover:bg-white/5 rounded-md transition-all duration-fast">
                  Ghost
                </button>
                <button className="px-lg py-md text-text-primary hover:bg-white/5 rounded-md transition-all duration-fast opacity-50 cursor-not-allowed">
                  Disabled
                </button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="text-sm font-semibold text-text-tertiary mb-lg uppercase">Button Sizes</p>
              <div className="flex flex-wrap gap-lg items-center">
                <button className="px-sm py-xs text-sm bg-accent text-inverse font-semibold rounded-md">Small</button>
                <button className="px-lg py-md text-base bg-accent text-inverse font-semibold rounded-md">Medium</button>
                <button className="px-xl py-lg text-lg bg-accent text-inverse font-semibold rounded-md">Large</button>
                <button className="px-2xl py-xl text-xl bg-accent text-inverse font-semibold rounded-md">XLarge</button>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Typography</h2>
          <div className="space-y-2xl">
            <div>
              <p className="text-xs font-semibold text-text-tertiary mb-md uppercase">Display 5XL</p>
              <h1 className="text-5xl font-bold text-text-primary">Heading 5XL Large Hero</h1>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary mb-md uppercase">Display 4XL</p>
              <h2 className="text-4xl font-bold text-text-primary">Heading 4XL Page Title</h2>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary mb-md uppercase">Display 3XL</p>
              <h3 className="text-3xl font-bold text-text-primary">Heading 3XL Section Title</h3>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary mb-md uppercase">Display 2XL</p>
              <h4 className="text-2xl font-bold text-text-primary">Heading 2XL Subsection</h4>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary mb-md uppercase">Body Large</p>
              <p className="text-lg text-text-primary">Large body text for emphasis or introductions to important content</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary mb-md uppercase">Body Default</p>
              <p className="text-base text-text-secondary">Default body text for general paragraphs and content</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary mb-md uppercase">Body Small</p>
              <p className="text-sm text-text-tertiary">Small text for captions, metadata, and secondary information</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary mb-md uppercase">Gradient Text</p>
              <h2 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">Highlighted with Gradient</h2>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Form Elements</h2>
          <div className="space-y-2xl max-w-md">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-md">
                Text Input
                <span className="text-error">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md text-text-primary placeholder:text-text-tertiary focus:border-accent focus:shadow-glow-sm focus:outline-none transition-all duration-fast"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-md">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md text-text-primary placeholder:text-text-tertiary focus:border-accent focus:shadow-glow-sm focus:outline-none transition-all duration-fast"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-md">Textarea</label>
              <textarea
                placeholder="Enter message..."
                className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md text-text-primary placeholder:text-text-tertiary focus:border-accent focus:shadow-glow-sm focus:outline-none transition-all duration-fast resize-none"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-md">Select</label>
              <select className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md text-text-primary focus:border-accent focus:shadow-glow-sm focus:outline-none transition-all duration-fast">
                <option>Choose option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-md cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded-sm accent-accent cursor-pointer" />
                <span className="text-base text-text-primary">I agree to terms</span>
              </label>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {/* Default Card */}
            <div className="bg-bg-light border border-accent/10 rounded-lg p-xl hover:border-accent/30 transition-all duration-fast">
              <h3 className="text-lg font-bold text-text-primary mb-md">Default Card</h3>
              <p className="text-text-secondary">Standard card with subtle border</p>
            </div>

            {/* Elevated Card */}
            <div className="bg-bg-light border border-accent/5 rounded-lg p-xl shadow-lg hover:shadow-xl transition-all duration-fast">
              <h3 className="text-lg font-bold text-text-primary mb-md">Elevated Card</h3>
              <p className="text-text-secondary">Card with prominent shadow</p>
            </div>

            {/* Featured Card */}
            <div className="relative bg-gradient-subtle border-2 border-accent rounded-lg p-xl overflow-hidden">
              <div className="absolute top-lg right-lg px-md py-sm bg-accent text-inverse text-xs font-bold rounded-full">
                Featured
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-md">Featured Card</h3>
              <p className="text-text-secondary">Highlighted with accent border</p>
            </div>
          </div>
        </section>

        {/* Spacing Scale */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Spacing Scale</h2>
          <div className="space-y-2xl">
            {[
              { name: 'XS (4px)', size: 'w-1' },
              { name: 'SM (8px)', size: 'w-2' },
              { name: 'MD (12px)', size: 'w-3' },
              { name: 'LG (16px)', size: 'w-4' },
              { name: 'XL (24px)', size: 'w-6' },
              { name: '2XL (32px)', size: 'w-8' },
              { name: '3XL (48px)', size: 'w-12' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-lg">
                <span className="text-sm font-semibold text-text-tertiary w-24">{item.name}</span>
                <div className={`${item.size} h-3 bg-accent rounded`}></div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Shadows</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2xl">
            <div className="bg-bg-light rounded-lg p-xl shadow-sm">
              <p className="text-sm font-semibold text-text-primary">Shadow SM</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl shadow-md">
              <p className="text-sm font-semibold text-text-primary">Shadow MD</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl shadow-lg">
              <p className="text-sm font-semibold text-text-primary">Shadow LG</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl shadow-glow-sm">
              <p className="text-sm font-semibold text-text-primary">Glow SM</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl shadow-glow-md">
              <p className="text-sm font-semibold text-text-primary">Glow MD</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl shadow-glow-lg">
              <p className="text-sm font-semibold text-text-primary">Glow LG</p>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Border Radius</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2xl">
            {[
              { name: 'SM (4px)', class: 'rounded-sm' },
              { name: 'MD (8px)', class: 'rounded-md' },
              { name: 'LG (12px)', class: 'rounded-lg' },
              { name: 'XL (16px)', class: 'rounded-xl' },
              { name: '2XL (24px)', class: 'rounded-2xl' },
              { name: 'Full (pill)', class: 'rounded-full' },
            ].map((item) => (
              <div key={item.name}>
                <div className={`${item.class} bg-accent h-20 mb-md`}></div>
                <p className="text-sm font-semibold text-text-primary">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Animations */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Animations</h2>
          <div className="grid sm:grid-cols-2 gap-2xl">
            <div className="bg-bg-light rounded-lg p-xl">
              <div className="w-12 h-12 bg-accent rounded-md animate-fade mb-lg"></div>
              <p className="text-sm font-semibold text-text-primary">Fade</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl">
              <div className="w-12 h-12 bg-accent rounded-md animate-slide-up mb-lg"></div>
              <p className="text-sm font-semibold text-text-primary">Slide Up</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl">
              <div className="w-12 h-12 bg-accent rounded-md animate-scale mb-lg"></div>
              <p className="text-sm font-semibold text-text-primary">Scale</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl">
              <div className="w-12 h-12 bg-accent rounded-md animate-pulse mb-lg"></div>
              <p className="text-sm font-semibold text-text-primary">Pulse</p>
            </div>
          </div>
        </section>

        {/* Responsive Breakpoints */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-2xl">Responsive Breakpoints</h2>
          <div className="bg-bg-light border border-accent/10 rounded-lg p-xl space-y-lg">
            {[
              { name: 'XS', width: '320px' },
              { name: 'SM', width: '640px' },
              { name: 'MD', width: '768px' },
              { name: 'LG', width: '1024px' },
              { name: 'XL', width: '1280px' },
            ].map((item) => (
              <div key={item.name}>
                <p className="text-sm font-semibold text-accent mb-md">{item.name}</p>
                <p className="text-sm text-text-tertiary font-mono">{item.width}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-accent/10 pt-5xl text-center">
          <p className="text-text-secondary">Design System v1.0 - MegaWebCreations</p>
          <p className="text-text-tertiary text-sm mt-md">For complete documentation, see DESIGN_SYSTEM.md</p>
        </div>
      </div>
    </div>
  )
}
