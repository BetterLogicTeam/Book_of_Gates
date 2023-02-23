import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Terms and Conditions</h1>
        </div>
        <div className="body">
          <p>1. General Terms  
Book of Gates is a collection of digital artworks in the form of non-fungible tokens (NFTs) running on the Ethereum network. This website and the related Discord server is only an interface allowing participants to exchange digital collectibles. Users are entirely responsible for the safety and management of their own private Ethereum wallets and validating all transactions and contracts generated by this website before approval. Furthermore, as the Book of Gates smart contract runs on the Ethereum network, there is no ability to undo, reverse, or restore any transactions.
This website, the Discord server, and its connected services (hereinafter sometimes “Site” or “Services”) are provided “as is” and “as available” without warranty of any kind. By using these Services you are accepting sole responsibility for any and all transactions involving Book of Gates digital collectibles.
Book of Gates IP. Nothing herein gives you any rights to any trademarks or intellectual property rights belonging to Book of Gates, LLC, including, without limitation, to the Book of Gates Character NFTs, the Book of Gates Graphic Novel, the Book of Gates Trading Game, and the associated logos and trademarks. All of these rights are expressly reserved in the name of Book of Gates, LLC.
Feedback. You may choose to submit comments, bug reports, ideas or other feedback about the Site, including without limitation about how to improve the Site (collectively, “Feedback”). By submitting any Feedback, you agree that we are free to use such Feedback in any way we choose without additional compensation to you and you hereby grant us a perpetual, irrevocable, nonexclusive, worldwide license to incorporate and use the Feedback for any purpose.
2. Your Obligations
You are solely responsible for your own conduct while accessing or using the Site, and for any consequences thereof. You agree to use the Site only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations in your jurisdiction. By way of example, and not as a limitation, you may not, and may not allow any third party to: (i) send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, fraudulent, hateful, violent, obscene, or otherwise objectionable content; (ii) distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a destructive or deceptive nature; (iii) impersonate another person; (iv) upload, post, transmit or otherwise make available through the Site any content that infringes the intellectual property or proprietary rights of any party or otherwise violates the legal rights of others; (v) engage in, promote, or encourage illegal activity (including, without limitation, money laundering); (vi) interfere with other users' use of the Site; (vii) use the Site for any unauthorized commercial purpose; (viii) modify, adapt, translate, or reverse engineer any portion of the Site; (ix) remove any copyright, trademark or other proprietary rights notices contained in or on the Site or any part of it; (x) use any technology to collect information about the Site for any unauthorized purpose; (xi) access or use the Site for the purpose of creating a product or service that is competitive with any of our products or services. If you engage in any of the activities prohibited by this Section, we may, at our sole and absolute discretion, without notice to you, and without limiting any of our other rights or remedies at law or in equity, immediately suspend or terminate your user account.
3. Fees and Payment
A. If you elect to purchase a Book of Gates NFT through the Site, any financial transactions that you engage in will be conducted solely through the Ethereum network. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. We will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage or any other transactions that you conduct via the Ethereum network.
B. Ethereum requires the payment of a transaction fee (a “Gas Fee”) for every transaction that occurs on the Ethereum network. The Gas Fee funds the network of computers that run the decentralized Ethereum network. This means that you will need to pay a Gas Fee for each transaction.
4. Disclaimers
A. YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF THE SITE IS AT YOUR SOLE RISK, AND THAT THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE SITE AND ANY PART OF IT (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY, OR RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR USE OF THE SITE WILL MEET YOUR REQUIREMENTS, (II) YOUR ACCESS TO OR USE OF THE SITE WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, (III) USAGE DATA PROVIDED THROUGH THE SITE WILL BE ACCURATE, (III) THE SITE OR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE ON OR THROUGH THE SITE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR (IV) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU USE THE SITE WILL BE SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
B. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR WILLFULL MISCONDUCT.
C. WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU INCUR AS THE RESULT OF YOUR USE OF THE ETHEREUM NETWORK NOR DO WE HAVE NO CONTROL OVER AND MAKE NO GUARANTEES REGARDING ANY SMART CONTRACTS.

5. Limitation of Liability
A. YOU UNDERSTAND AND AGREE THAT WE WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUTLIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
B. YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF (OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE SITE, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS $10.00 AND THAT YOU HAVE WAIVED ANY CLAIM TO LIABILITY BEYOND SUCH AMOUNT AS AN EXPRESS CONDITION OF THE USE OF THIS WEBSITE.
C. YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE SITE AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN. WE WOULD NOT BE ABLE TO PROVIDE THE SITE TO YOU WITHOUT THESE LIMITATIONS.
6. Risk Assumption
You accept and acknowledge each of the following:
A. To the extent that you sell your Book of Gates NFT, please be aware that the prices of NFTs are extremely volatile and fluctuations in the prices of other NFTs can impact the price of your Book of Gates NFT both positively and negatively. Given the volatility, NFTs such as Book of Gates NFT are exclusively a collectible should not be considered an investment. You assume all risks in that connection.
B. Ownership of a Book of Gates NFT confers ownership of digital artwork only. Accordingly, no information on this Site (or any other documents mentioned therein) is or may be considered to be advice or an invitation to enter into an agreement for any investment purpose. Further, nothing on this Site qualifies or is intended to be an offering of securities in any jurisdiction nor does it constitute an offer or an invitation to purchase shares, securities or other financial products. Due to the artistic nature of the project, Book of Gates NFT has not been registered with or approved by any regulator in any jurisdiction. It remains your sole responsibility to assure that the purchase of the Book of Gates NFT and the associated art is in compliance with laws and regulations in your jurisdiction.
C. You assume all risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet.
D. NFTs, cryptocurrencies and blockchain technology are relatively new and the regulatory landscape is unsettled. New regulations could negatively impact such technologies impacting the value of your Book of Gates NFT. You understand and accept all risk in that regard.
E. You assume all responsibility for any adverse effects of disruptions or other issues impacting Ethereum or the Ethereum platform.
7. Indemnification
You agree to hold harmless and indemnify Book of Gates, LLC and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or nature, suit, judgment, litigation cost, and reasonable attorneys' fees arising out of or in any way related to (i) your breach of these Terms, (ii) your misuse of the Site, or (iii) your violation of applicable laws, rules or regulations in connection with your access to or use of the Site.
8. Changes to the Terms and Conditions
We may make changes to the Terms at our discretion. Please check these Terms periodically for changes. Any changes to the Terms will apply on the date that they are made, and your continued access to or use after the Terms have been updated will constitute your binding acceptance of the updates. If you do not agree to any revised Terms, you may not access or use the Site.
9. Children
Our Site is not intended for children. You must be at least 18 years old to access this Site or purchase a Book of Gates NFT. If you are under 18 years old you are not permitted to use this Site for any reason. By accessing the Site, you represent and warrant that you are at least 18 years of age.
10. Dispute Resolution; Arbitration
All disputes arising out of or in connection with these Terms, including without limitation your access or use of the Site, or to any products sold or distributed through the Site, will be referred to and finally resolved by arbitration under the rules of the American Arbitration Association. The case will be adjudicated by a single arbitrator and will be administered by the American Arbitration Association in accordance with its applicable rules. Each party will cover its own fees and costs associated with the arbitration proceedings. The place of arbitration will be Beverly Hills, California. The award of the arbitrator will be final and binding, and any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Notwithstanding the foregoing, we may seek and obtain injunctive relief in any jurisdiction in any court of competent jurisdiction.
WITH RESPECT TO ANY DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS, INCLUDING WITHOUT LIMITATION DISPUTES RELATED TO THE SITE OR ANY PRODUCTS SOLD OR DISTRIBUTED THROUGH THE SITE, OR THE SMART CONTRACTS: (I) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO HAVE A TRIAL BY JURY; AND (II) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS IN ANY LAWSUIT, INCLUDING BUT NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY SUCH DISPUTE.
11. Governing Law and Jurisdiction.
This Agreement shall be governed by, and construed, in accordance with the laws of the State of Delaware, applicable to contracts entered into and to be fully performed therein. Should any dispute or controversy arise between the parties hereto with reference to this contract, or the services herein provided for, such dispute or controversy shall be adjudicated in the Federal and/or State courts located in Los Angeles, California, which such courts shall have exclusive jurisdiction over any claims arising hereunder. Nothing herein shall serve to prevent enforcement of binding Arbitration upon the parties as provided in this Agreement, nor to in any way contradict the Agreement executed by the parties regarding Arbitration in Beverly Hills, California. 

12 Securities Disclaimers
ANY REPRODUCTION OR DISTRIBUTION OF THIS WEBSITE OR DISCORD SERVER, IN WHOLE OR IN PART, OR THE DISSEMINATION OF ANY OF ITS CONTENTS WITHOUT THE PRIOR WRITTEN CONSENT OF THE COMPANY IS PROHIBITED.  ANY ACTION CONTRARY TO THESE INSTRUCTIONS MAY CAUSE YOU TO BE IN VIOLATION OF APPLICABLE LAWS. THE BOOK OF GATES DISCORD SERVER IS A PRIVATE CLUB THAT MAY NOT BE ACCESSED WITHOUT AN INVITATION FROM ANOTHER MEMBER.

THIS CONFIDENTIAL WEBSITE AND DISCORD SERVER DOES NOT CONSTITUTE AN OFFER TO SELL OR A SOLICITATION OF ANY OFFER TO BUY ANY SECURITIES. THE BOOK OF GATES NFTS ARE DIGITAL COLLECTABLES AND NO RESALE MARKET SHOULD BE ASSUMED, NOR IS IT THE INTENTION THAT THE BOOK OF GATES NFTS BE PURCHASED FOR RESALE. THE DELIVERY OF THIS WEBSITE AND DISCORD SERVER SHALL NOT UNDER ANY CIRCUMSTANCES IMPLY THAT MATTERS DISCUSSED HEREIN HAVE NOT CHANGED SINCE THE DATE HEREOF.  HOWEVER, IN THE EVENT ANY MATERIAL CHANGES AND SUCH MATTERS COME TO THE ATTENTION OF THE COMPANY, THIS WEBSITE AND DISCORD SERVER WILL BE AMENDED OR SUPPLEMENTED ACCORDINGLY.

READERS MUST NOT CONSTRUE THE CONTENTS OF THIS WEBSITE AND DISCORD SERVER OR ANY PRIOR OR SUBSEQUENT COMMUNICATION FROM THE COMPANY, AGENTS OR AFFILIATES, OR ANY OTHER PERSON ASSOCIATED WITH THIS WEBSITE AND DISCORD SERVER, AS LEGAL, FINANCIAL, TAX OR INVESTMENT ADVICE.  EACH READER SHOULD CONSULT HIS OWN PERSONAL LEGAL COUNSEL, BUSINESS OR TAX ADVISOR AS TO LEGAL, TAX, FINANCIAL AND RELATED MATTERS CONCERNING THE MATTERS DESCRIBED HEREIN.  NO REPRESENTATION OR WARRANTY IS MADE AS TO THE ACCURACY OR COMPLETENESS OF INFORMATION HEREIN.

THIS WEBSITE AND DISCORD SERVER IS SUBMITTED IN CONNECTION WITH THE PRODUCTION OF DIGITAL COLLECTIBLES IN THE FORM OF NON-FUNGIBLE TOKENS AND MAY NOT BE REPRODUCED OR USED FOR ANY PURPOSE.  ANY DISTRIBUTION OF THIS CONFIDENTIAL WEBSITE AND DISCORD SERVER, IN WHOLE OR IN PART, OR THE DIVULGENCE OF ANY OF ITS CONTENTS, IS UNAUTHORIZED.
13. Federal Securities Laws in the United States:
THE BOOK OF GATES NFTS ARE DIGITAL COLLECTIBLES, NOT INTENDED FOR RESALE IN ANY JURISDICTION WHERE SUCH RESALE IS PROHIBITED, AND ARE NOT REGISTERED UNDER THE SECURITIES ACT OF 1933, AS AMENDED, OR UNDER ANY STATE SECURITIES LAWS AND MAY NOT BE SOLD, HYPOTHECATED, OR OTHERWISE TRANSFERRED EXCEPT AS PERMITTED BY LAW. RESALES OF BOOK OF GATES NFTS ON THIRD PARTY MARKETS SUCH AS OPENSEE.IO, MAY NOT BE PERMITTED IN YOUR JURISDICTION AND BOOK OF GATES, LLC IS NOT A PARTY TO THIRD PARTY MARKET AGREEMENTS OR SALES. THE BOOK OF GATES NFTS MAY BE FILED FOR EXEMPTION TO SECURITIES REGISTRATION BUT SUCH EXEMPTION FILING SHALL NOT CLASSIFY THE NON-FUNGIBLE TOKENS AS SECURITIES.
</p>
        </div>
        <div className="footer">
      
          
        </div>
      </div>
    </div>
  );
}

export default Modal;