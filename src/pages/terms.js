import { Link } from 'gatsby';
import React, { useState } from 'react';
import H from '../components/mdxComponents/Headings';
import { PostMetaTags } from '../components/MetaTags';

export default function AboutPage({ data, path }) {
  return (
    <>
      <PostMetaTags
        post={{
          frontmatter: {
            slug: path,
            title: 'Terms and Conditions',
          },
        }}
      />
      <H>Terms and Conditions</H>
      <p>Last updated on January 13, 2022</p>
      <H as="h2">Introduction</H>
      <p>
        These are the terms and conditions of use of the WesBos.com web site,
        its related websites, and its and their successor web sites
        (collectively referred to as the “Site”), which are owned and operated
        by Bos Type Inc. (which may be referred to in the Terms as “we”, “us”,
        “Wesbos.com” or “Wes Bos”). By visiting the Site or by indicating during
        any purchase on the Site that you agree to these terms and conditions of
        use, you are agreeing to be legally bound by them and also by our{' '}
        <Link to="/privacy">Privacy Policy</Link> (collectively with these terms
        and conditions of use referred to as the “Terms” or the “Agreement”),
        and are also agreeing that while you use the Site or use anything that
        you purchase from the Site you will comply with all applicable laws and
        regulations.
      </p>
      <p>
        If you do not agree with the Terms, you are prohibited from using or
        accessing the Site. The materials, information, software, and content
        contained in or on or that may be purchased from the Site (collectively
        referred to herein as the “Materials”) are protected by applicable law,
        including copyright and trademark law.
      </p>
      <p>
        By agreeing to the Terms, you agree to our use, collection and
        disclosure of your personal information as described in our{' '}
        <Link to="/privacy">Privacy Policy</Link>.
      </p>
      <H as="h2">Registration</H>
      <p>
        If you register for an account on the Site, you agree to (a) provide
        accurate, current and complete information as may be prompted by any
        registration forms on the Site (“Registration Data”); (b) maintain the
        security of your password; (c) maintain and promptly update the
        Registration Data, and any other information you provide to the Site,
        and to keep it accurate, current and complete; and (d) accept all risks
        of unauthorized access to the Registration Data and any other
        information you provide to the Site. You are responsible for all
        activity on your Site account.
      </p>
      <H as="h2">Our Grant to You of a Limited Use License</H>
      <p>
        The Materials are our property or are licensed to us by third parties,
        and are protected by law. We reserve all rights to the Materials except
        for those granted in the Terms. You may not redistribute, broadcast,
        stream, upload, share, publish or share them with anyone else in any
        way, provided that you may use code provided on the Site in any of your
        projects and are free to publish the source of that code anywhere,
        including on the internet. If you purchase video Materials from the Site
        we grant you a license to use those Materials only for your own
        personal, non-commercial viewing. If you purchase access to Materials on
        the Site, you may not produce your own video tutorials that
        substantially imitate those Materials or the methods or techniques
        described in those Materials, or are competitive with those Materials.
        If the Site describes a term, viewing, streaming or download limit on
        the use of the Materials, they are licensed to you subject to those
        limits. If you would like a license better suited to your use, please
        contact us at the email address below.
      </p>
      <p>
        The rights granted to you in the Terms are the grant of a license, not a
        transfer of title. That grant is non-exclusive, non-sublicensable, and
        non-assignable or transferable, and may be revoked by us without notice
        if you breach the Terms.
      </p>
      <p>
        Notwithstanding any other provision of the Terms, we reserve the right
        to change, suspend, remove, or disable access to any Materials at any
        time without notice. In no event will we be liable for the removal of or
        disabling of access to any such Materials.{' '}
      </p>
      <H as="h2">Purchases on the Site</H>
      <p>
        You agree to pay for all Materials that you license through the Site,
        and that we may charge your credit card or other permitted payment
        method through our payment processor for any Materials licensed. The
        payment methods that we accept are described on the Site. You are
        responsible for the timely payment of all fees and for providing our
        payment processor with valid credit card or other permitted payment
        details for payment of all fees. All purchases on the Site are final,
        but if you are not satisfied with your purchase, you may contact us at
        the email address below to request a refund. Any refund requests must be
        received within 90 days of the purchase date.  Refunds are given at our
        sole discretion.
      </p>
      <H as="h2">Disclaimers</H>
      <p>
        The Site and the Materials are provided to you "as is" and “as
        available” basis. We make no warranties, expressed or implied, about the
        Site or the Materials, and we disclaim all other warranties, including
        without limitation, implied warranties or conditions of merchantability,
        fitness for a particular purpose, availability, uninterrupted operation,
        title or non-infringement of intellectual property or other violation of
        third-party rights. Further, we do not warrant or make any
        representations concerning the accuracy, likely results, or reliability
        of the use of the Site or the Materials, or otherwise relating to such
        Materials or on any web sites linked to the Site.
      </p>
      <p>
        We do not represent or guarantee that the Site or the Materials will be
        free from loss, corruption, attack, viruses, interference, hacking, or
        other security intrusion, and we disclaim any liability relating
        thereto. Materials are periodically archived and may not after that time
        be available for download, so you should download the Materials you
        purchase and make sure you backup your copy.. You shall be responsible
        for backing up your own system, including any Materials licensed from
        the Site that are stored in your system.
      </p>
      <p>
        We shall use reasonable efforts to protect information submitted by you
        in connection with your use of the Site, but you acknowledge and agree
        that your submission of such information is at your sole risk, and we
        hereby disclaim any and all liability to you for any loss or liability
        relating to such information in any way.
      </p>
      <p>
        In no case shall we or our suppliers or licensors, and our respective
        directors, officers, employees, affiliates, agents, contractors, and
        principals, be liable for any direct, indirect, incidental, punitive,
        special, or consequential damages arising from your use of the Site or
        any of the Materials or for any other claim related in any way to your
        use of the Site or the Materials, including, but not limited to, any
        errors or omissions in any content, or any loss or damage of any kind
        incurred as a result of the use of any content (or product) posted,
        transmitted, or otherwise made available via the Site, even if advised
        of their possibility. In all cases, our maximum aggregate liability to
        you for any loss, damage or liability that you may suffer from using the
        Site or the Materials is the purchase price of the Materials you
        obtained from the Site from which such loss, damage or liability arose.
      </p>
      <H as="h2">Termination</H>
      <p>
        a. Termination by Us. If you fail, or we suspect that you have failed,
        to comply with any of the provisions of the terms, including but not
        limited to failure to make payment of fees due, violation of any license
        to the Materials, or infringement or other violation of third parties'
        rights, we, at our sole discretion, without notice to you may: (i)
        terminate the Agreement including your licenses to the Materials (or any
        part thereof) and your account on the Site; and/or (ii) terminate only
        such licenses and your account; and/or (iii) preclude access to the
        Materials (or any part thereof) through the Site or to your account.
      </p>
      <p>
        b. Termination of the Services Offered by the Site. We reserve the right
        to modify, suspend, or discontinue the Site (or any part or content
        thereof) at any time with or without notice to you, and we will not be
        liable to you or to any third party should we exercise such rights.
      </p>
      <H as="h2">Miscellaneous</H>
      <p>
        The laws of the Province of Ontario and the federal laws of Canada
        applicable therein govern these Terms and your use of the Site and the
        Materials. Your use of the Materials may also be subject to other local,
        provincial, national, or international laws. You expressly agree that
        exclusive jurisdiction for any claim or dispute with us relating in any
        way to your use of the Site or the Materials resides in the courts of
        Ontario. The Terms constitute the entire agreement between you and us
        relating to the Site and the Materials, superseding any prior
        agreements. You are not permitted to assign any of your rights or
        obligations under the Terms without our prior written consent, and any
        such attempted assignment will be void and unenforceable. We may
        unilaterally revise the Terms at any time. If we amend the Terms, the
        amendment shall take effect at the stated effective time, and your use
        of the Site after such effective time shall indicate your agreement with
        the revised Terms. If we make a material amendment of the Terms that
        applies to you, we will give prior notice of the amendment either by
        contacting you at the email address you have provided to us or by
        posting a banner on the Site which shall be visible when you next visit
        the Site after the effective time of the amendment. The parties agree
        that it is their wish that the Terms, as well as any other documents
        relating to the Terms, including notices, have been and shall be drawn
        up in the English language only.{' '}
        <em lang="en-fr">
          Les parties reconnaissent avoir convenue que la présente convention
          ainsi que tous documents, avis et procédures judiciaires qui pourront
          être exécutés, donnés ou intentées à la suite des présentes ou ayant
          un rapport, direct ou indirect, avec la présente convention soient
          rédigée en anglais.
        </em>
      </p>
    </>
  );
}
