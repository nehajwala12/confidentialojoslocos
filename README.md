# Ojos Locos: growing sales and EBITDA (CreditSwan, edition 4.4, for Comvest)

DRAFT, built on Ojos's system data to FY2026 period 10 (period 11 booked, not closed). Prepared 23 Nov 2026. This is the full Comvest packet: everything in 4.1, plus management's monthly packs (FY2024 P1 to FY2026 P10, audits FY2023 to FY2025) and the 2027 budget (cash model 2027A and 2027B).

One file, `index.html`. Open it in a browser, or deploy the folder as a static site. `vercel.json` and `robots.txt` set clean URLs and block indexing, and `.vercelignore` keeps this README off the site.
What is new in 4.4 (23 Nov 2026)
- Comvest's answers of 23 Nov folded in. Sponsor fee: Comvest says it may be paid during a default and the amendment will settle the FY2026 accrual; paying the accrual and the 2027 fee would take about $2.5M the 2027 cash forecast does not hold (Overview, Overhead and cash; 06 Management's 2027 budget; 07 Sponsor fee and board; request list).
- 2027 budget cash items explained: $0.53M contingent claim is an insurance premium audit from Radcliff's purchase from GSP, never paid; $0.80M California payment settles a fine for 2022/23 payroll claims. New requests: accrual status, seller recourse, which legal matters close, the 17.5% cap.
- New section 03 Market, Customer survey (Exhibits 3.29 to 3.31, assumption A-62): Beckett Square's study of 1 Sep 2026. Cross-references in pricing, security, DJs, crew hours (California scheduling rules), insurance (premium audits) and the register and sources.
- One-page summary (Overview, B) rebuilt as four tiles, three charts (Exhibits 1.01 to 1.03: run-rate to base case, the base case by quarter of FY2027, what the base case depends on) and eight short linked lines; the other Overview exhibits move up three numbers.
- Lever sizes and totals unchanged from 4.3.

Password (Comvest edition only)
- The site asks for a password before anything loads: any username, password **Ojos2026**. It is enforced on Vercel's servers by `middleware.js` (Vercel Routing Middleware, Basic Auth), so the page is never sent without it. `package.json` only marks the folder as an ES module; there is nothing to install.
- Deploy the whole folder (Vercel CLI `vercel --prod` from inside it, or a Git import). Framework preset: Other. After deploying, open the link in a private window: the browser should ask for the password.
- To change the password, edit `PASSWORD` in `middleware.js` and redeploy.

How to find things
- **Start here.** Seven key sections are pinned at the top of the menu on every tab, and repeated as cards at the top of the Overview:
  1. One-page summary
  2. Quick hits, Q4
  3. Path to $13M
  4. Reported history (new in 4.2)
  5. Management's 2027 budget (new in 4.2)
  6. Overhead and cash
  7. Next 100 days

  Each card opens its summary on the Overview, and the line under it opens the full detail.
- **The Overview reads in three parts.**
  - Part 1 is the plan and what to do now: the seven sections above.
  - Part 2 is how the business got here: Position, Diagnosis, Market, Stores and Revenue.
  - Part 3 is the supporting evidence.

  Every Overview section ends with a link to its detail, and its exhibits are numbered 1.01 to 1.40 in page order.
- **Key sections.** Each detail tab, 02 to 09, opens with a line linking to its most-used sections. For example, 06 links to Savings at a glance, Quick hits Q4, The answer, and Timing and risk.

What changed in 4.3 (23 Nov 2026)
- **Names taken out.** No one on Ojos's salaried roster is named anywhere in the packet. People appear by title only (chief executive, CFO, chief legal officer, VP of FP&A, CTO, outsourced controller), including the data tables, the timeline, the add-back list and the team list. Pay is shown only for groups of three or more roles.
- **07 Overhead and cash, Payroll (new section):** the salaried roster Ojos sent on 20 Nov. Head-office pay by function (Exhibit 7.29: 48 roles, $6.16M of base pay, matching the latest R365 pay runs); the nine roles removed by when they left (Exhibit 7.30: $1.28M, of which $0.38M left in October, after period 10); store managers per store (Exhibit 7.31: 145 managers, $10.30M, thirteen stores with five or six); Sous Chef against the three accounting roles it replaced; the 1 January 2027 California salaried-pay floor.
- **02 Diagnosis, Cost of goods:** management's reason for the liquor cost step-up (a 22oz frozen mug at $1 over the 16oz, and discounted daily drink specials), with the two actions it points to; the same note in the timeline and the liquor candidate in Exhibit 6.40.
- **06 Management's 2027 budget:** a budget by line is due in the first week of December.
- **Statuses from Ojos's reply of 20 Nov:** roster received; loss runs requested; Sous Chef letter to come from the outsourced controller; sponsor-fee agreements to come from Radcliff and Comvest (Ojos declined); lease renewal plans for seven stores after Ojos's lease meeting with Comvest. Lever sizes and totals are unchanged.
- Build script: Desktop/OJOS LOCOS/analysis/v43-roster-email/scripts (r1 roster aggregates, no names; c2 build).

What changed in 4.2 (23 Nov 2026)
- **02 Diagnosis, Reported history (new, first section):** adjusted EBITDA $27.2M (FY2024), $20.8M (FY2025), $8.48M (twelve months to P10 2026) on management's own packs; store margin 22.4% to 12.7%; bridge FY2024 to the last twelve months (labor rate −$6.6M, occupancy and other store costs −$5.2M, comps −$2.3M, lower sales −$2.1M). Exhibits 2.32 to 2.35.
- **06 Savings and path, Management's 2027 budget (new):** how the cash model is built (sales × margin, no cost lines), its sales path (P8-P9 +10%) and margins (12.5% from P8), the refresh case, a sensitivity grid, what does not add up, and CreditSwan's 2027 view by quarter. Exhibits 6.44 to 6.48.
- **07 Overhead and cash:** Working capital (new section; accounts payable +$2.8M in a year, $1.9M excluding the sponsor fee; Exhibits 7.24, 7.25); add-backs by year and the recurring 'one-offs' (Exhibits 7.26, 7.27); **Exhibit 7.22 restated**: $1M of capex fits only if the quick hits come on top of the budget's margins, which the model cannot show.
- **09 Appendix, Management's packs (new):** the company's own covenant schedule (Exhibit 9.22), the restatement log (9.23), the three pack formats (9.24). **Exhibit 9.20 restated:** the cap cuts $0.77M off the company's $8.48M (earlier drafts: $1.11M on CreditSwan's add-back set; cap is 17.5%, not 17%).
- **08 Way forward:** new questions for the CFO, the outsourced controller and the VP of FP&A (Exhibits 8.15 to 8.17). **10 Assumptions:** A-58 to A-61.
- **01 Overview:** two new sections and cards; one-page summary adds the history and the budget; Overview exhibits renumbered 1.01 to 1.40 in page order (the old 1.08 to 1.38 are now 1.10 to 1.40).
- **Later on 23 Nov:** the asks of Ojos taken out (Overview card and section, the one-page paragraph, and Way forward's Questions by person, old Exhibits 8.15 to 8.18), to be handled by email; cost savings alone stated ($3.4M / $6.3M / $11.2M a year) in the one-page summary and Savings at a glance; MIT deferral and IT added as candidates in Exhibit 6.40; new Exhibit 7.28 (2027 budget overhead by line against the last twelve months); 7.22 adds that capex beyond maintenance follows a budget by line and realized savings.
- Build scripts: Desktop/OJOS LOCOS/analysis/ws8-history-budget/scripts (a1 to a5 data, b0 to b3 build). Data tables in the same folder.

What is where
- 01 Overview
- 02 Diagnosis, 03 Market, 04 Stores, 05 Revenue
- 06 Savings and the path to $13M
- 07 Overhead and cash, including the sponsor fee, the pro forma bridge and the cash runway
- 08 Way forward
- 09 Appendix, with the financing matters
- 10 Assumptions (60), 11 FAQ, 12 About CreditSwan

No figure, source or assumption from v3.3 was changed or removed. Figures come from Ojos's Mirus, R365 and Toast systems and the documents shared, and each exhibit names its source and basis.
